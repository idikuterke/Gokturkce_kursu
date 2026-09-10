// ComfyUI (127.0.0.1:8188) üzerinden Flux ile METİNSİZ arka plan görselleri üretir.
// İlke (gokturk_vision ile aynı): difüzyon modeli asla tamga çizmez — yazı sonradan deterministik
// olarak (HTML metin / gokturkce_render_image) eklenir. Böylece uydurma tamga riski sıfır.
// Kullanım: node engine/gorsel/comfy.mjs [--sadece id]   → content/gorsel/ham/<id>.png
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const OUT = path.join(ROOT, "content/gorsel/ham");
fs.mkdirSync(OUT, { recursive: true });
const HOST = "http://127.0.0.1:8188";
const CKPT = "flux1-dev-fp8.safetensors";
const NEG_HINT = "no text, no letters, no writing, no glyphs, no symbols, no runes, no inscriptions, blank surface";

export const ISLER = [
  { id: "orhun-bengu-tas", w: 1344, h: 768, seed: 1893,
    prompt: `A tall ancient grey granite stele standing alone on the Mongolian Orkhon steppe at golden hour, weathered stone monument with smooth blank front face, distant mountains, dry grass, dramatic sky, documentary photograph, 35mm, ${NEG_HINT}` },
  { id: "irk-bitig-sayfa", w: 1344, h: 768, seed: 907,
    prompt: `Open ancient Central Asian paper manuscript booklet from the 9th century on a dark wooden table, aged yellowed paper with faint red ink dots in margins, soft brush and ink stone beside it, museum lighting, macro photograph, completely blank pages, ${NEG_HINT}` },
  { id: "tas-doku", w: 1344, h: 768, seed: 552,
    prompt: `Frontal orthographic photograph of one single large flat weathered dark grey granite slab face filling the whole frame, fine grain, even soft light with slight raking from upper left, uniform blank stone surface, no cracks, no joints, ${NEG_HINT}` },
  { id: "keski-firca", w: 1344, h: 768, seed: 7440,
    prompt: `Still life: an iron chisel and wooden mallet resting on a rough grey stone block on the left; a single bamboo calligraphy brush lying on a plain empty sheet of aged paper on the right; the paper is pristine and completely empty; split composition, dark moody background, museum photograph, ${NEG_HINT}` },
];

function workflow({ prompt, w, h, seed }, id) {
  return {
    1: { class_type: "CheckpointLoaderSimple", inputs: { ckpt_name: CKPT } },
    2: { class_type: "CLIPTextEncode", inputs: { text: prompt, clip: ["1", 1] } },
    3: { class_type: "CLIPTextEncode", inputs: { text: "text, letters, writing, glyphs, symbols, runes, inscription, watermark, signature, blurry, deformed", clip: ["1", 1] } },
    4: { class_type: "EmptySD3LatentImage", inputs: { width: w, height: h, batch_size: 1 } },
    5: { class_type: "FluxGuidance", inputs: { guidance: 3.5, conditioning: ["2", 0] } },
    6: { class_type: "KSampler", inputs: { seed, steps: 20, cfg: 1.0, sampler_name: "euler", scheduler: "simple", denoise: 1.0,
         model: ["1", 0], positive: ["5", 0], negative: ["3", 0], latent_image: ["4", 0] } },
    7: { class_type: "VAEDecode", inputs: { samples: ["6", 0], vae: ["1", 2] } },
    8: { class_type: "SaveImage", inputs: { filename_prefix: `gokturkce_kursu/${id}`, images: ["7", 0] } },
  };
}

async function api(p, opt) { const r = await fetch(HOST + p, opt); if (!r.ok) throw new Error(`${p}: ${r.status} ${await r.text()}`); return r; }

export async function uret(is) {
  const { prompt_id } = await (await api("/prompt", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ prompt: workflow(is, is.id) }) })).json();
  process.stdout.write(`  ${is.id} (${is.w}×${is.h}, seed ${is.seed}) … `);
  for (let t = 0; t < 900; t++) {
    await new Promise((r) => setTimeout(r, 2000));
    const h = await (await api(`/history/${prompt_id}`)).json();
    const kayit = h[prompt_id];
    if (!kayit) continue;
    if (kayit.status?.status_str === "error") throw new Error("ComfyUI hata: " + JSON.stringify(kayit.status.messages).slice(0, 500));
    const img = kayit.outputs?.["8"]?.images?.[0];
    if (img) {
      const buf = Buffer.from(await (await api(`/view?filename=${encodeURIComponent(img.filename)}&subfolder=${encodeURIComponent(img.subfolder)}&type=${img.type}`)).arrayBuffer());
      const out = path.join(OUT, is.id + ".png");
      fs.writeFileSync(out, buf);
      console.log(`${(buf.length / 1024).toFixed(0)} KB → ${path.relative(ROOT, out)}`);
      return out;
    }
  }
  throw new Error("zaman aşımı");
}

if (path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const sadece = process.argv.indexOf("--sadece") > -1 ? process.argv[process.argv.indexOf("--sadece") + 1] : null;
  try { await api("/system_stats"); } catch { console.error("ComfyUI'ye bağlanılamadı: " + HOST); process.exit(1); }
  console.log("Flux arka plan üretimi (metinsiz):");
  for (const is of ISLER.filter((i) => !sadece || i.id === sadece)) await uret(is);
}
