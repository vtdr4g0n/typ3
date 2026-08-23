// DR4G0N-TYP3 Tamil key engine
// User custom Tamil typing rules are preserved here.
const TWO_KEY_MAP = {
  'fh':'கா',"'h":'ஙா','rh':'சா','"h':'ஞா','lh':'டா','zh':'ணா','jh':'தா','eh':'நா','dh':'னா','gh':'பா','kh':'மா','ah':'யா','uh':'ரா','wh':'றா','yh':'லா','sh':'ளா','Hh':'ழா','th':'வா',
  'pf':'கி',"p'":'ஙி','pr':'சி','p"':'ஞி','po':'டி','pz':'ணி','pj':'தி','pe':'நி','pd':'னி','pg':'பி','pk':'மி','pa':'யி','pu':'ரி','pw':'றி','py':'லி','ps':'ளி','pH':'ழி','pt':'வி',
  'Pf':'கீ',"P'":'ஙீ','Pr':'சீ','P"':'ஞீ','Po':'டீ','Pz':'ணீ','Pj':'தீ','Pe':'நீ','Pd':'னீ','Pg':'பீ','Pk':'மீ','Pa':'யீ','Pu':'ரீ','Pw':'றீ','Py':'லீ','Ps':'ளீ','PH':'ழீ','Pt':'வீ',
  'bf':'கெ',"b'":'ங்கெ','br':'செ','b"':'ஞெ','bl':'டெ','bz':'ணெ','bj':'தெ','be':'நெ','bd':'னெ','bg':'பெ','bk':'மெ','ba':'யெ','bu':'ரெ','bw':'றெ','by':'லெ','bs':'ளெ','bH':'ழெ','bt':'வெ',
  'nf':'கே',"n'":'ங்கே','nr':'சே','n"':'ஞே','nl':'டே','nz':'ணே','nj':'தே','ne':'நே','nd':'னே','ng':'பே','nk':'மே','na':'யே','nu':'ரே','nw':'றே','ny':'லே','ns':'ளே','nH':'ழே','nt':'வே',
  'if':'கை',"i'":'ங்கை','ir':'சை','i"':'ஞை','il':'டை','iz':'ணை','ij':'தை','ie':'நை','id':'னை','ig':'பை','ik':'மை','ia':'யை','iu':'ரை','iw':'றை','iy':'லை','is':'ளை','iH':'ழை','it':'வை',
  '[f':'கு',"['":'ங்கு','[r':'சு','["':'ஞு','[z':'ணு','[g':'பு','[a':'யு','[t':'வு',
  '{f':'கூ',"{'":'ங்கூ','{r':'சூ','{"':'ஞூ','{g':'பூ','{A':'யூ','{t':'வூ',
  'c&':'ஷ', ':l':'டூ','Q}':'ணூ','J}':'தூ','E}':'நூ','D}':'னூ',':K':'மூ',':U':'ரூ','W}':'றூ','Y}':'லூ',':S':'ளூ',':G':'ழூ'
};
const THREE_KEY_MAP = {
  'bfh':'கொ',"b'h":'ங்கொ','brh':'சொ','b"h':'ஞொ','blh':'டொ','bzh':'ணொ','bjh':'தொ','beh':'நொ','bdh':'னொ','bgh':'பொ','bkh':'மொ','bah':'யொ','buh':'ரொ','bwh':'றொ','byh':'லொ','bsh':'ளொ','bHh':'ழொ','bth':'வொ',
  'nfh':'கோ',"n'h":'ங்கோ','nrh':'சோ','n"h':'ஞோ','nlh':'டோ','nzh':'ணோ','njh':'தோ','neh':'நோ','ndh':'னோ','ngh':'போ','nkh':'மோ','nah':'யோ','nuh':'ரோ','nwh':'றோ','nyh':'லோ','nsh':'ளோ','nHh':'ழோ','nth':'வோ',
  'bfs':'கௌ',"b's":'ங்கௌ','brs':'சௌ','b"s':'ஞௌ','bls':'டௌ','bzs':'ணௌ','bjs':'தௌ','bes':'நௌ','bds':'னௌ','bgs':'பௌ','bks':'மௌ','bas':'யௌ','bus':'ரௌ','bws':'றௌ','bys':'லௌ','bss':'ளௌ','bHs':'ழௌ','bts':'வௌ'
};
const ONE_KEY_MAP = {
  'm':'அ','M':'ஆ',',':'இ','<':'ஈ','c':'உ','C':'ஊ','v':'எ','V':'ஏ','x':'ஒ','X':'ஓ','I':'ஐ',
  'f':'க',"'":'ங','r':'ச','"':'ஞ','l':'ட','z':'ண','j':'த','e':'ந','d':'ன','g':'ப','k':'ம','a':'ய','u':'ர','w':'ற','y':'ல','s':'ள','H':'ழ','t':'வ',
  'F':'கு','R':'சு','L':'டு','J':'து','E':'நு','D':'னு','K':'மு','U':'ரு','W':'று','Y':'லு','S':'ளு','G':'ழு','T':'கூ','o':'டி',
  '!':'ஸ','|':'!','@':'"','#':'%','$':'ஜ','%':'ு','^':'ூ','&':'ஷ்','*':"'",'(':'(',')':')','_':'ஸ்ரீ','-':'ஸ்ரீ','B':'னு','N':'சூ','A':'று','O':'டீ','P':'ீ','Q':'ணு','}':'ூ',']':'&','i':'ை','p':'ி','[':'ு','{':'ூ',':':'ூ','b':'ெ','n':'ே','Z':'ணு','>':'?','/':'.','?':'-',' ':' ','\n':'\n','.':','
};
const PULLI = '்';
const WAIT_PREFIX_KEYS = new Set([';','p','P','b','n','i','[','{',':','Q','J','E','D','W','Y']);
const EXTENDABLE_PREFIXES = new Set();
for (const k of [...Object.keys(TWO_KEY_MAP), ...Object.keys(THREE_KEY_MAP)]) {
  for (let i = 1; i < k.length; i++) EXTENDABLE_PREFIXES.add(k.slice(0, i));
}
function tamilSequencesFor(g) {
  const seq = [];
  for (const [k,v] of Object.entries(ONE_KEY_MAP)) if (v === g) seq.push(k);
  for (const [k,v] of Object.entries(TWO_KEY_MAP)) if (v === g) seq.push(k);
  for (const [k,v] of Object.entries(THREE_KEY_MAP)) if (v === g) seq.push(k);
  // Mei letters: ; + consonant, e.g. ;f = க்
  for (const [k,v] of Object.entries(ONE_KEY_MAP)) {
    if (v && v.length === 1 && v + PULLI === g) seq.push(';' + k);
  }
  return [...new Set(seq)].sort((a,b)=>a.length-b.length);
}
function normalizeRawInput(raw) {
  // Keep user raw Tamil keystrokes exactly. Important: peidth;ww;y must become நினைவாற்றல்.
  return String(raw);
}
function transliterate(raw) {
  raw = normalizeRawInput(raw);
  let out = '', buf = '', pendingPulli = false;
  for (let i=0;i<raw.length;i++) {
    const ch = raw[i];

    if (buf === '' && ch === ';') {
      pendingPulli = true;
      buf = ';';
      continue;
    }

    if (buf) {
      buf += ch;
      let use = null;

      if (buf[0] === ';') {
        const body = buf.slice(1);
        const base = THREE_KEY_MAP[body] || TWO_KEY_MAP[body] || ONE_KEY_MAP[body];
        if (base) use = base + PULLI;
        else if (EXTENDABLE_PREFIXES.has(body)) continue;
      } else {
        use = THREE_KEY_MAP[buf] || TWO_KEY_MAP[buf];
      }

      if (use) {
        out += use;
        buf = '';
        pendingPulli = false;
        continue;
      }

      if (EXTENDABLE_PREFIXES.has(buf)) continue;

      // If the buffer is no longer valid, flush it safely as individual keys.
      out += buf.split('').map(c => ONE_KEY_MAP[c] ?? c).join('');
      buf = '';
      pendingPulli = false;
      continue;
    }

    // Longest match first.
    const t3 = THREE_KEY_MAP[raw.slice(i,i+3)];
    if (t3) { out += t3; i += 2; continue; }

    const two = raw.slice(i,i+2);
    const t2 = TWO_KEY_MAP[two];
    if (t2) {
      // If this 2-key sequence can become a 3-key sequence and the 3rd key has not arrived yet, wait.
      const canExtend = Object.keys(THREE_KEY_MAP).some(k => k.startsWith(two));
      if (canExtend && i + 2 >= raw.length) { buf = two; continue; }
      out += t2; i += 1; continue;
    }

    // Prefix / vowel-sign keys must wait for the consonant after them.
    if (WAIT_PREFIX_KEYS.has(ch) && raw[i+1] && EXTENDABLE_PREFIXES.has(ch + raw[i+1])) { buf = ch; continue; }

    out += ONE_KEY_MAP[ch] ?? ch;
  }
  return { text: out, pendingPrefix: buf, pendingPulli };
}
function keyDisplay(seq) {
  if (!seq) return '';
  return seq.split('').map(k => k === ' ' ? 'SPACE' : k === '\n' ? 'ENTER' : k).join(' + ');
}
function bestTamilSequenceFor(g) {
  const a = tamilSequencesFor(g);
  return a.length ? a[0] : '';
}
function isTamil(ch){ return /[\u0B80-\u0BFF]/.test(ch); }
function toGraphemes(str){
  if (window.Intl && Intl.Segmenter) return [...new Intl.Segmenter('ta',{granularity:'grapheme'}).segment(str)].map(s=>s.segment);
  return Array.from(str.normalize('NFC'));
}
function escapeHTML(s){ return String(s).replace(/[&<>]/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m])); }

// --- Alignment-based scoring ---
// Old scoring compared tg[i] to pg[i] at the same index. A single extra or
// missing character shifts every following index out of sync, so one typo
// used to cascade into hundreds of false "mistakes". This does a bounded
// local resync (handles substitutions, extra keys, and skipped keys) so a
// mistake is only counted once, at the point it actually happened.
function computeAlignment(tg, pg) {
  const W = 4; // lookahead window for resyncing after a mismatch
  let i = 0, j = 0, correct = 0, mistakes = 0;
  const editPositions = [];
  while (i < tg.length && j < pg.length) {
    if (tg[i] === pg[j]) { correct++; i++; j++; continue; }
    let shiftI = 1, shiftJ = 1, found = false;
    // Does treating it as a plain substitution resync immediately?
    if (tg[i+1] !== undefined && pg[j+1] !== undefined && tg[i+1] === pg[j+1]) {
      shiftI = 1; shiftJ = 1; found = true;
    }
    // Extra key typed (not present in passage): advance tg only.
    if (!found) {
      for (let k = 1; k <= W; k++) { if (tg[i+k] === pg[j]) { shiftI = k; shiftJ = 0; found = true; break; } }
    }
    // Missing key (passage char skipped): advance pg only.
    if (!found) {
      for (let k = 1; k <= W; k++) { if (tg[i] === pg[j+k]) { shiftI = 0; shiftJ = k; found = true; break; } }
    }
    mistakes++;
    editPositions.push(j);
    i += shiftI; j += shiftJ;
    if (shiftI === 0 && shiftJ === 0) { i++; j++; } // safety net
  }
  if (i < tg.length) { mistakes += (tg.length - i); editPositions.push(Math.max(0, j - 1)); }
  return { correct, mistakes, editPositions, consumed: j };
}
// Attributes each edit to the word (space-delimited span) it fell inside,
// so one typo only ever counts as one mistaken word, not a whole tail of them.
function countWordMistakesFromEdits(pg, editPositions) {
  const boundaries = [];
  let start = 0;
  for (let idx = 0; idx <= pg.length; idx++) {
    if (idx === pg.length || pg[idx] === ' ') {
      if (idx > start) boundaries.push([start, idx]);
      start = idx + 1;
    }
  }
  const mistakenWords = new Set();
  for (const pos of editPositions) {
    for (let w = 0; w < boundaries.length; w++) {
      if (pos >= boundaries[w][0] && pos < boundaries[w][1]) { mistakenWords.add(w); break; }
    }
  }
  return mistakenWords.size;
}
