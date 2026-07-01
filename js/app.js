function buildTable() {
  const table = document.getElementById('ptable');
  // 18 columns × 10 rows (with gap rows)
  // We'll use CSS grid with 18 columns
  const cells = {};
  LAYOUT.forEach(([n, col, row]) => { cells[`${row}-${col}`] = n; });

  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 18; col++) {
      const n = cells[`${row}-${col}`];
      const div = document.createElement('div');

      if (row === 8) {
        // Gap row spacer
        if (col === 1) {
          div.style.gridColumn = '1 / -1';
          div.style.height = '10px';
          div.style.background = 'transparent';
          table.appendChild(div);
          break;
        } else continue;
      }

      if (n && ELEMENTS[n]) {
        const el = ELEMENTS[n];
        const color = COLORS[el.cat] || COLORS.unknown;
        div.className = 'element';
        div.style.setProperty('--el-color', color);
        div.innerHTML = `
          <span class="el-number">${n}</span>
          <span class="el-symbol">${el.sym}</span>
          <span class="el-name">${el.name}</span>
          <span class="el-mass">${el.mass}</span>
        `;
        div.addEventListener('click', () => openModal(n));
      } else if (row === 6 && col === 3) {
        div.className = 'element spacer';
        div.style.fontSize = '0.42rem';
        div.style.color = '#f48fb1';
        div.style.lineHeight = '1.3';
        div.style.opacity = '0.6';
        div.innerHTML = `<span style="font-size:0.9rem">57–71</span><br>Lantán.`;
      } else if (row === 7 && col === 3) {
        div.className = 'element spacer';
        div.style.fontSize = '0.42rem';
        div.style.color = '#a5d6a7';
        div.style.lineHeight = '1.3';
        div.style.opacity = '0.6';
        div.innerHTML = `<span style="font-size:0.9rem">89–103</span><br>Actín.`;
      } else if (row === 9 && col <= 3) {
        div.className = 'element spacer';
        if (col === 3) {
          div.style.fontSize = '0.4rem';
          div.style.color = '#f48fb1';
          div.style.opacity = '0.5';
          div.innerHTML = 'Ln';
        }
      } else if (row === 10 && col <= 3) {
        div.className = 'element spacer';
        if (col === 3) {
          div.style.fontSize = '0.4rem';
          div.style.color = '#a5d6a7';
          div.style.opacity = '0.5';
          div.innerHTML = 'Ac';
        }
      } else {
        div.className = 'element spacer';
      }
      table.appendChild(div);
    }
  }
}

// Image search via Wikipedia API
async function fetchElementImage(symbol, name) {
  try {
    const query = encodeURIComponent(name + ' element');
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`;
    const r = await fetch(url);
    const d = await r.json();
    if (d.thumbnail && d.thumbnail.source) return d.thumbnail.source;
  } catch(e) {}
  return null;
}

function openModal(n) {
  const el = ELEMENTS[n];
  if (!el) return;
  const color = COLORS[el.cat] || COLORS.unknown;
  const modal = document.getElementById('modal');
  modal.style.setProperty('--modal-color', color);

  document.getElementById('mNumber').textContent = n;
  document.getElementById('mSymbol').textContent = el.sym;
  document.getElementById('mMass').textContent = el.mass;
  document.getElementById('mName').textContent = el.name;
  document.getElementById('mCategory').textContent = CAT_NAMES[el.cat] || el.cat;
  document.getElementById('pNumber').textContent = n;
  document.getElementById('pMass').textContent = el.mass + ' u';
  document.getElementById('pPeriod').textContent = el.period;
  document.getElementById('pGroup').textContent = el.group || '—';
  document.getElementById('pState').textContent = el.state;
  document.getElementById('pDiscovery').textContent = el.disc;
  document.getElementById('mDesc').textContent = el.desc;

  const imgContainer = document.getElementById('imgContainer');
  imgContainer.innerHTML = `
    <div class="img-placeholder" id="imgPlaceholder">
      <span class="big" style="color:${color}">${el.sym}</span>
      <span style="color:rgba(255,255,255,0.3); font-size:0.65rem">Cargando imagen…</span>
    </div>`;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';

  // Load image
  fetchElementImage(el.sym, el.name).then(imgSrc => {
    const placeholder = document.getElementById('imgPlaceholder');
    if (!placeholder) return;
    if (imgSrc) {
      placeholder.outerHTML = `<img src="${imgSrc}" alt="${el.name}" style="width:200px;height:160px;object-fit:cover;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:#0d1b2e;">`;
    } else {
      placeholder.innerHTML = `<span class="big" style="color:${color}">${el.sym}</span><span style="color:rgba(255,255,255,0.25);font-size:0.65rem">Sin imagen disponible</span>`;
    }
  });
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

buildTable();
