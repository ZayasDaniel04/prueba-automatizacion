
// ── CATÁLOGO ──
const CATALOG=[
  {n:"Citi México Casa de Bolsa, S.A. de C.V., Grupo Financiero Citi México",c:"13001"},
  {n:"Grupo Bursátil Mexicano, S.A. de C.V., Casa de Bolsa",c:"13007"},
  {n:"Casa de Bolsa Multiva, S.A. de C.V., Grupo Financiero Multiva",c:"13011"},
  {n:"Casa de Bolsa Finamex, S.A.B. de C.V.",c:"13012"},
  {n:"Value, S.A. de C.V., Casa de Bolsa, Value Grupo Financiero",c:"13019"},
  {n:"Actinver Casa de Bolsa, S.A. de C.V., Grupo Financiero Actinver",c:"13020"},
  {n:"Monex Casa de Bolsa, S.A. de C.V., Monex Grupo Financiero",c:"13021"},
  {n:"Vector Casa de Bolsa, S.A. de C.V.",c:"13026"},
  {n:"Valores Mexicanos Casa de Bolsa, S.A. de C.V.",c:"13032"},
  {n:"Evercore Casa de Bolsa, S.A. de C.V.",c:"13121"},
  {n:"Casa de Bolsa Base, S.A. de C.V., Grupo Financiero Base",c:"13122"},
  {n:"Intercam Casa de Bolsa, S.A. de C.V., Intercam Grupo Financiero",c:"13124"},
  {n:"CI Casa de Bolsa, S.A. de C.V.",c:"13125"},
  {n:"Masari Casa de Bolsa, S.A.",c:"13127"},
  {n:"Kuspit Casa de Bolsa, S.A. de C.V.",c:"13128"},
  {n:"Banco Nacional de Comercio Exterior, Sociedad Nacional de Crédito, Institución de Banca de Desarrollo",c:"37006"},
  {n:"Banco Nacional de Obras y Servicios Públicos, Sociedad Nacional de Crédito, Institución de Banca de Desarrollo",c:"37009"},
  {n:"Banco Nacional del Ejército, Fuerza Aérea y Armada, Sociedad Nacional de Crédito, Institución de Banca de Desarrollo",c:"37019"},
  {n:"Nacional Financiera, Sociedad Nacional de Crédito, Institución de Banca de Desarrollo",c:"37135"},
  {n:"Banco del Bienestar, Sociedad Nacional de Crédito, Institución de Banca de Desarrollo",c:"37166"},
  {n:"Sociedad Hipotecaria Federal, Sociedad Nacional de Crédito, Institución de Banca de Desarrollo",c:"37168"},
  {n:"Banco Nacional de México, S.A., Integrante del Grupo Financiero Banamex",c:"40002"},
  {n:"BBVA Bancomer, S.A., Institución de Banca Múltiple, Grupo Financiero BBVA Bancomer",c:"40012"},
  {n:"BBVA México, S.A., Institución de Banca Múltiple, Grupo Financiero BBVA México",c:"40012"},
  {n:"Banco Santander México, S.A., Institución de Banca Múltiple, Grupo Financiero Santander México",c:"40014"},
  {n:"Banco Santander (México), S.A., Institución de Banca Múltiple, Grupo Financiero Santander México",c:"40014"},
  {n:"HSBC México, S.A., Institución de Banca Múltiple, Grupo Financiero HSBC",c:"40021"},
  {n:"Banco del Bajío, S.A., Institución de Banca Múltiple",c:"40030"},
  {n:"Banco Inbursa, S.A., Institución de Banca Múltiple, Grupo Financiero Inbursa",c:"40036"},
  {n:"Banca Mifel, S.A., Institución de Banca Múltiple, Grupo Financiero Mifel",c:"40042"},
  {n:"Scotiabank Inverlat, S.A., Institución de Banca Múltiple, Grupo Financiero Scotiabank Inverlat",c:"40044"},
  {n:"Banco Regional, S.A., Institución de Banca Múltiple, Banregio Grupo Financiero",c:"40058"},
  {n:"Banco Invex, S.A., Institución de Banca Múltiple, Invex Grupo Financiero",c:"40059"},
  {n:"Bansi, S.A., Institución de Banca Múltiple",c:"40060"},
  {n:"Banca Afirme, S.A., Institución de Banca Múltiple, Afirme Grupo Financiero",c:"40062"},
  {n:"Banco Mercantil del Norte, S.A., Institución de Banca Múltiple, Grupo Financiero Banorte",c:"40072"},
  {n:"Accendo Banco, S.A., Institución de Banca Múltiple",c:"40102"},
  {n:"American Express Bank (México), S.A., Institución de Banca Múltiple",c:"40103"},
  {n:"Bank of America México, S.A., Institución de Banca Múltiple",c:"40106"},
  {n:"MUFG Bank México, S.A., Institución de Banca Múltiple Filial",c:"40108"},
  {n:"Banco J.P. Morgan, S.A., Institución de Banca Múltiple, J.P. Morgan Grupo Financiero",c:"40110"},
  {n:"Banco Monex, S.A., Institución de Banca Múltiple, Monex Grupo Financiero",c:"40112"},
  {n:"Banco Ve Por Más, S.A., Institución de Banca Múltiple, Grupo Financiero Ve Por Más",c:"40113"},
  {n:"Deutsche Bank México, S.A., Institución de Banca Múltiple",c:"40124"},
  {n:"Banco Azteca, S.A., Institución de Banca Múltiple",c:"40127"},
  {n:"Banco Autofin México, S.A., Institución de Banca Múltiple",c:"40128"},
  {n:"Barclays Bank México, S.A., Institución de Banca Múltiple, Grupo Financiero Barclays México",c:"40129"},
  {n:"Banco Compartamos, S.A., Institución de Banca Múltiple",c:"40130"},
  {n:"Banco Multiva, S.A., Institución de Banca Múltiple, Grupo Financiero Multiva",c:"40132"},
  {n:"Banco Actinver, S.A., Institución de Banca Múltiple, Grupo Financiero Actinver",c:"40133"},
  {n:"Intercam Banco, S.A., Institución de Banca Múltiple, Intercam Grupo Financiero",c:"40136"},
  {n:"BanCoppel, S.A., Institución de Banca Múltiple",c:"40137"},
  {n:"ABC Capital, S.A., Institución de Banca Múltiple",c:"40138"},
  {n:"Consubanco, S.A., Institución de Banca Múltiple",c:"40140"},
  {n:"Volkswagen Bank, S.A., Institución de Banca Múltiple",c:"40141"},
  {n:"Cibanco, S.A., Institución de Banca Múltiple",c:"40143"},
  {n:"Banco Base, S.A., Institución de Banca Múltiple, Grupo Financiero Base",c:"40145"},
  {n:"Bankaool, S.A., Institución de Banca Múltiple",c:"40147"},
  {n:"Banco Pagatodo, S.A., Institución de Banca Múltiple",c:"40148"},
  {n:"Banco Inmobiliario Mexicano, S.A., Institución de Banca Múltiple",c:"40150"},
  {n:"Fundación Dondé Banco, S.A., Institución de Banca Múltiple",c:"40151"},
  {n:"Banco Bancrea, S.A., Institución de Banca Múltiple",c:"40152"},
  {n:"Banco Finterra, S.A., Institución de Banca Múltiple",c:"40154"},
  {n:"Banco Covalto, S.A., Institución de Banca Múltiple",c:"40154"},
  {n:"Industrial and Commercial Bank of China México, S.A., Institución de Banca Múltiple",c:"40155"},
  {n:"Banco Sabadell, S.A., Institución de Banca Múltiple",c:"40156"},
  {n:"Banco Shinhan de México, S.A., Institución de Banca Múltiple",c:"40157"},
  {n:"Mizuho Bank México, S.A., Institución de Banca Múltiple",c:"40158"},
  {n:"Banco S3 México, S.A., Institución de Banca Múltiple",c:"40160"},
  {n:"Ualá, S.A., Institución de Banca Múltiple",c:"40138"},
  {n:"Axa Seguros, S.A. de C.V.",c:"22048"},
  {n:"HDI Seguros, S.A. de C.V.",c:"22027"},
  {n:"Sistema de Transferencias y Pagos STP, S.A. de C.V., Institución de Fondos de Pago Electrónico",c:"65010"},
  {n:"MercadoLibre, S.A. de C.V., Institución de Fondos de Pago Electrónico",c:"65033"},
  {n:"S.D. Indeval Institución para el Depósito de Valores, S.A. de C.V.",c:"25002"},
  {n:"Caja Popular Mexicana, S.C. de A.P. de R.L. de C.V.",c:"29056"},
  {n:"Nu México Financiera, S.A. de C.V., S.F.P.",c:"27014"},
  {n:"Kapital México Casa de Bolsa, S.A. de C.V., Kapital México Grupo Financiero",c:"13124"},
  {n:"Banco Citi México, S.A., Institución de Banca Múltiple, Grupo Financiero Citi México",c:"40124"}
];

let selInst=null;

// ── UTILS ──
function fmtMoney(n){return'$'+n.toLocaleString('es-MX',{minimumFractionDigits:2,maximumFractionDigits:2});}
function fmtDate(d){
  if(!d)return'';
  const[y,m,day]=d.split('-');
  const M=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  return`${parseInt(day)} de ${M[parseInt(m)-1]} de ${y}`;
}
function getDesc(){const r=parseFloat(document.getElementById('importe').value)||0;return Math.round(r*.8*100)/100;}

function numToWords(num){
  const ones=['','UNO','DOS','TRES','CUATRO','CINCO','SEIS','SIETE','OCHO','NUEVE','DIEZ','ONCE','DOCE','TRECE','CATORCE','QUINCE','DIECISÉIS','DIECISIETE','DIECIOCHO','DIECINUEVE'];
  const tens=['','DIEZ','VEINTE','TREINTA','CUARENTA','CINCUENTA','SESENTA','SETENTA','OCHENTA','NOVENTA'];
  const huns=['','CIENTO','DOSCIENTOS','TRESCIENTOS','CUATROCIENTOS','QUINIENTOS','SEISCIENTOS','SETECIENTOS','OCHOCIENTOS','NOVECIENTOS'];
  function three(n){
    if(n===0)return'';if(n===100)return'CIEN';
    const h=Math.floor(n/100),rem=n%100;
    let r=h?huns[h]+' ':'';
    if(rem<20&&rem>0)r+=ones[rem];
    else{const t=Math.floor(rem/10),o=rem%10;if(t)r+=tens[t];if(o)r+=(t?' Y ':'')+ones[o];}
    return r.trim();
  }
  const ip=Math.floor(num),dp=Math.round((num-ip)*100);
  let r='';
  if(ip>=1000000){const m=Math.floor(ip/1000000);r+=(m===1?'UN MILLÓN':three(m)+' MILLONES')+' ';const rest=ip%1000000;if(rest>=1000){const th=Math.floor(rest/1000);r+=(th===1?'MIL':three(th)+' MIL')+' '+three(rest%1000);}else r+=three(rest);}
  else if(ip>=1000){const th=Math.floor(ip/1000);r+=(th===1?'MIL':three(th)+' MIL')+' '+three(ip%1000);}
  else r=three(ip);
  return r.trim()+` PESOS ${String(dp).padStart(2,'0')}/100 M.N.`;
}

// ── AUTOCOMPLETE ──
const srch=document.getElementById('inst-search'),drop=document.getElementById('inst-drop');
srch.addEventListener('input',function(){
  const q=this.value.trim().toLowerCase();
  if(q.length<2){drop.style.display='none';return;}
  const f=CATALOG.filter(i=>i.n.toLowerCase().includes(q)||i.c.includes(q)).slice(0,12);
  if(!f.length){drop.style.display='none';return;}
  drop.innerHTML=f.map(i=>`<div class="ac-item" onclick="selInstFn('${i.n.replace(/'/g,"\\'")}','${i.c}')">${i.n}<span>CASFIM: ${i.c}</span></div>`).join('');
  drop.style.display='block';
});
srch.addEventListener('blur',()=>setTimeout(()=>drop.style.display='none',200));
function selInstFn(n,c){selInst={n,c};srch.value=n;document.getElementById('casfim').value=c;drop.style.display='none';updPreview();}

// ── AUTO-TEXTO ──
document.getElementById('no-res').addEventListener('input',()=>{autoTxt();updPreview();});
document.getElementById('exp').addEventListener('input',()=>{autoTxt();updPreview();});
function autoTxt(){
  const r=document.getElementById('no-res').value.trim(),e=document.getElementById('exp').value.trim();
  const tf=document.getElementById('texto');
  if(!tf.dataset.manual&&r&&e){tf.value=(r+'/'+e).slice(0,42);updCC();}
}
document.getElementById('texto').addEventListener('input',function(){this.dataset.manual='1';updCC();updPreview();});
function updCC(){const v=document.getElementById('texto').value,el=document.getElementById('cc');el.textContent=v.length+' / 42';el.className='cc'+(v.length>42?' over':v.length>35?' warn':'');}

function updImporte(){
  const r=parseFloat(document.getElementById('importe').value)||0,box=document.getElementById('calc-box');
  if(r>0){document.getElementById('imp-desc').textContent=fmtMoney(Math.round(r*.8*100)/100);box.style.display='block';}
  else box.style.display='none';
  updPreview();
}
document.getElementById('importe').addEventListener('input',updImporte);
['no-res','exp','memo','f-memo','f-escrito','f-recep','operacion'].forEach(id=>{
  document.getElementById(id).addEventListener('input',updPreview);
  document.getElementById(id).addEventListener('change',updPreview);
});
document.getElementById('f-memo').value=new Date().toISOString().split('T')[0];

// ── PREVIEW ──
function updPreview(){
  const inst=selInst?selInst.n:'[Institución no seleccionada]';
  const raw=parseFloat(document.getElementById('importe').value)||0,imp=getDesc();
  const texto=document.getElementById('texto').value||'—',memo=document.getElementById('memo').value||'—';
  const fm=document.getElementById('f-memo').value,fe=document.getElementById('f-escrito').value;
  document.getElementById('preview').innerHTML=`
    <div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e8e4de"><strong style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#6b6b6b">📊 Layout Excel (BBVA)</strong></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;font-size:13px;margin-bottom:14px">
      <div><span class="tag">Institución</span><br>${inst}</div>
      <div><span class="tag">CASFIM</span><br>${selInst?selInst.c:'—'}</div>
      <div><span class="tag">Monto original</span><br>${raw>0?fmtMoney(raw):'—'}</div>
      <div><span class="tag">Importe (−20%)</span><br>${imp>0?fmtMoney(imp):'—'}</div>
      <div><span class="tag">Cuenta Resultados</span><br>385050311</div>
      <div><span class="tag">TEXTO</span><br>${texto}</div>
    </div>
    <div style="margin:10px 0;padding:10px 0;border-top:1px solid #e8e4de;border-bottom:1px solid #e8e4de"><strong style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#6b6b6b">📄 Memorando Word</strong></div>
    <div style="font-size:13px;line-height:2"><strong>Ref.:</strong> ${memo}<br><strong>Fecha:</strong> ${fm?fmtDate(fm):'—'}<br><strong>Institución:</strong> ${inst}<br><strong>Monto a cobrar:</strong> ${imp>0?fmtMoney(imp):'—'}<br><strong>Fecha escrito:</strong> ${fe?fmtDate(fe):'—'}</div>`;
}

// ── VALIDACIÓN ──
function validate(word=false){
  const e=[];
  if(!selInst)e.push('Selecciona una institución');
  if(!document.getElementById('no-res').value.trim())e.push('No. Resolución es obligatorio');
  if(!document.getElementById('exp').value.trim())e.push('Expediente es obligatorio');
  if(!(parseFloat(document.getElementById('importe').value)>0))e.push('Ingresa el monto original');
  const t=document.getElementById('texto').value.trim();
  if(!t)e.push('TEXTO es obligatorio');if(t.length>42)e.push('TEXTO excede 42 caracteres');
  if(word){
    if(!document.getElementById('memo').value.trim())e.push('No. Memorando es obligatorio');
    if(!document.getElementById('f-memo').value)e.push('Fecha del memorando es obligatoria');
    if(!document.getElementById('f-escrito').value)e.push('Fecha del escrito es obligatoria');
    if(!document.getElementById('f-recep').value)e.push('Fecha de recepción es obligatoria');
  }
  return e;
}
function showAlert(type,msg){document.getElementById('alert-area').innerHTML=`<div class="alert al-${type}">${msg}</div>`;window.scrollTo({top:0,behavior:'smooth'});setTimeout(()=>document.getElementById('alert-area').innerHTML='',7000);}
function download(blob,name){const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;a.click();URL.revokeObjectURL(u);}

// ── EXCEL ──
function generateExcel(){
  const errs=validate(false);if(errs.length){showAlert('err','⚠ '+errs.join(' · '));return;}
  const inst=selInst.n,casfim=selInst.c,importe=getDesc(),operacion=document.getElementById('operacion').value;
  const texto=document.getElementById('texto').value.trim(),res=document.getElementById('no-res').value.trim();

  const wb=XLSX.utils.book_new();
  const aoa=[
    [''],
    ['Instrucciones de sanciones a aplicar'],
    ['Número de\nsanción','*Operación','CASFIM','Nombre Institución','IMPORTE','CUENTA DE RESULTADOS\n(Sin dígito verificador)','* TEXTO'],
    [1,operacion,parseInt(casfim),inst,importe,'385050311',texto],
    [''],
    ['Notas:'],
    ['* Las aplicaciones son Valor Día Siguiente.'],
    ['* En el campo "Operación" indicar si se trata de una Sanción (S) o Devolución (D).'],
    ['* El campo de texto tiene un máximo de 42 caracteres'],
  ];
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  ws['!ref']='A1:G9';
  ws['!cols']=[{wch:14},{wch:12},{wch:9},{wch:58},{wch:13},{wch:24},{wch:36}];
  ws['!rows']=[{hpt:6},{hpt:20},{hpt:30},{hpt:15},{hpt:6},{hpt:13},{hpt:13},{hpt:13},{hpt:13}];
  ws['!merges']=[{s:{r:1,c:0},e:{r:1,c:6}}];

  const BK={style:'medium',color:{rgb:'000000'}};
  const BT={style:'thin',color:{rgb:'000000'}};
  const allM={top:BK,bottom:BK,left:BK,right:BK};
  const allT={top:BT,bottom:BT,left:BT,right:BT};
  const W={patternType:'solid',fgColor:{rgb:'FFFFFF'}};

  // Título A2
  ws['A2'].s={font:{bold:true,sz:11,name:'Calibri'},alignment:{horizontal:'center',vertical:'center'},border:allM,fill:W};
  for(const c of['B2','C2','D2','E2','F2','G2']){if(!ws[c])ws[c]={t:'z'};ws[c].s={border:{top:BK,bottom:BK},fill:W};}

  // Headers fila 3
  const HDR={font:{bold:true,sz:10,name:'Calibri'},alignment:{horizontal:'center',vertical:'center',wrapText:true},border:allT,fill:W};
  for(const c of['A3','B3','C3','D3','E3','F3','G3']){if(ws[c])ws[c].s=HDR;}

  // Datos fila 4 — todos centrados excepto D (institución) e importe a la derecha
  const DC={font:{sz:10,name:'Calibri'},alignment:{horizontal:'center',vertical:'center'},border:allT,fill:W};
  const DL={font:{sz:10,name:'Calibri'},alignment:{horizontal:'left',vertical:'center'},border:allT,fill:W};
  const DR={font:{sz:10,name:'Calibri'},alignment:{horizontal:'right',vertical:'center'},border:allT,fill:W};
  if(ws['A4'])ws['A4'].s=DC;
  if(ws['B4'])ws['B4'].s=DC;
  if(ws['C4']){ws['C4'].s=DC;ws['C4'].t='n';}
  if(ws['D4'])ws['D4'].s=DL;
  if(ws['E4']){ws['E4'].s=DR;ws['E4'].t='n';ws['E4'].z='#,##0.00';}
  if(ws['F4'])ws['F4'].s=DC;
  if(ws['G4'])ws['G4'].s=DL;

  // Notas
  if(ws['A6'])ws['A6'].s={font:{bold:true,sz:10,name:'Calibri'},alignment:{horizontal:'left',vertical:'center'}};
  for(const c of['A7','A8','A9']){if(ws[c])ws[c].s={font:{sz:10,name:'Calibri'},alignment:{horizontal:'left',vertical:'center'}};}

  XLSX.utils.book_append_sheet(wb,ws,'Instrucciones sanciones');
  const buf=XLSX.write(wb,{bookType:'xlsx',type:'array',cellStyles:true});
  download(new Blob([buf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}),
           `UL_LAYOUT_COBRO_${res.replace(/\//g,'_')}_${casfim}.xlsx`);
  showAlert('ok','✅ Excel generado correctamente');
}

// ── WORD (docx desde cero con JSZip) ──
async function generateWord(){
  const errs=validate(true);if(errs.length){showAlert('err','⚠ '+errs.join(' · '));return;}
  const inst=selInst.n,imp=getDesc();
  const impFmt=fmtMoney(imp).replace('$','\\$'),impWords=numToWords(imp);
  const memo=document.getElementById('memo').value.trim();
  const fmemoStr=fmtDate(document.getElementById('f-memo').value);
  const fescritoStr=fmtDate(document.getElementById('f-escrito').value);
  const diaRecep=parseInt(document.getElementById('f-recep').value.split('-')[2]);
  const res=document.getElementById('no-res').value.trim();

  // ── Helper XML escape ──
  function x(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

  // ── Run properties: fuente, tamaño (half-points), bold, superscript ──
  // font: 'Calibri' | 'Arial' | 'Times New Roman'
  function rPr(opts){
    const font = opts.font || 'Calibri';
    const sz   = (opts.sz || 11) * 2;   // half-points
    let s = `<w:rPr><w:rFonts w:ascii="${font}" w:hAnsi="${font}" w:cs="${font}"/>`;
    s += `<w:sz w:val="${sz}"/><w:szCs w:val="${sz}"/>`;
    if(opts.bold)  s += '<w:b/><w:bCs/>';
    if(opts.sup)   s += '<w:vertAlign w:val="superscript"/>';
    if(opts.color) s += `<w:color w:val="${opts.color}"/>`;
    s += '</w:rPr>';
    return s;
  }

  // ── Paragraph properties ──
  function pPr(align, indDXA){
    let s = `<w:pPr><w:jc w:val="${align||'both'}"/><w:spacing w:before="0" w:after="0"/>`;
    if(indDXA) s += `<w:ind w:left="${indDXA}"/>`;
    s += '</w:pPr>';
    return s;
  }

  // ── Run helper ──
  function run(text, opts){
    return `<w:r>${rPr(opts||{})}<w:t xml:space="preserve">${x(text)}</w:t></w:r>`;
  }

  // ── Paragraph helper ──
  function para(content, align, indDXA){
    return `<w:p>${pPr(align, indDXA)}${content}</w:p>`;
  }
  function empty(align){ return para('', align||'both'); }

  // ── Opciones de fuente reutilizables ──
  // 1. Año: Calibri 10 negrita centrado
  const oAnio   = {font:'Calibri', sz:10, bold:true};
  // 2. MEMORANDO: Calibri 11 negrita centrado  
  const oMemo   = {font:'Calibri', sz:11, bold:true};
  // 3. Ciudad/Ref: Calibri 11 normal
  const oCiudad = {font:'Calibri', sz:11};
  // 4. MARY CARMEN: Calibri 11 negrita
  const oNombre = {font:'Calibri', sz:11, bold:true};
  // 5. Gerente: Calibri 11 sin negrita
  const oGte    = {font:'Calibri', sz:11};
  // 6. Cuerpo general: Calibri 11 (con variante bold para resaltes)
  const oCuerpo = {font:'Calibri', sz:11};
  const oCuerpoB= {font:'Calibri', sz:11, bold:true};
  const oCuerpoSup={font:'Calibri', sz:11, bold:true, sup:true};
  const oCuerpoSupSm={font:'Calibri', sz:6, sup:true};  // superíndice pequeño en nota
  // 7. Nota al pie (final de hoja, no pie de página): Calibri 9
  const oNota   = {font:'Calibri', sz:9};
  const oNotaSup= {font:'Calibri', sz:7, sup:true};
  // Separador de nota: Calibri 9
  const oSep    = {font:'Calibri', sz:9};

  const NOTA_TEXT = 'Monto determinado al aplicar el descuento de 20% por pronto pago al monto original, de conformidad con el art\u00edculo 67, segundo p\u00e1rrafo, de la Ley del Banco de M\u00e9xico, en virtud de que el escrito fue recibido dentro del plazo de quince d\u00edas h\u00e1biles siguientes a la fecha de notificaci\u00f3n de la resoluci\u00f3n.';

  // Indentación Ciudad/Ref: ~7.5 cm desde margen izquierdo
  // Margen izq = 1701 DXA (3cm). Total indent desde borde = ~5670 DXA (~10cm desde borde)
  const IND_CIUDAD = 4300; // DXA — ajusta posición derecha como en la captura

  // Párrafo separador de nota: usa space-before grande para empujarlo al fondo de la página
  // ~5000 twips ≈ espacio suficiente para llegar al final antes del pie de página
  function paraSpaceBefore(content, spaceBefore){
    return `<w:p><w:pPr><w:jc w:val="left"/><w:spacing w:before="${spaceBefore}" w:after="0"/></w:pPr>${content}</w:p>`;
  }

  const body = `
    ${para(run('\u201c2026, A\u00f1o de Margarita Maza Parada\u201d', oAnio), 'center')}
    ${empty('center')}
    ${para(run('M E M O R A N D O', oMemo), 'center')}
    ${empty('center')}
    ${empty()}
    ${para(run('Ciudad de M\u00e9xico, a '+fmemoStr+'.', oCiudad), 'both', IND_CIUDAD)}
    ${para(run('Ref.: '+memo, oCiudad), 'both', IND_CIUDAD)}
    ${empty()}
    ${empty()}
    ${para(run('MARY CARMEN CABRERA RUEDA', oNombre))}
    ${para(run('Gerente de Gesti\u00f3n de Operaciones', oGte))}
    ${empty()}
    ${para(
      run('Nos referimos al escrito de fecha '+fescritoStr+', recibido por este Banco Central el d\u00eda '+diaRecep+' del mismo mes y a\u00f1o, mediante el cual ', oCuerpo)+
      run(inst, oCuerpoB)+
      run(', autoriz\u00f3 el cargo en la cuenta que le lleva Banco de M\u00e9xico, para cubrir el importe de la multa que le fue impuesta por este Instituto Central.', oCuerpo)
    )}
    ${empty()}
    ${para(
      run('Sobre el particular, y con la finalidad de concluir con el procedimiento de imposici\u00f3n de sanci\u00f3n, les solicitamos que efect\u00faen el cargo por ', oCuerpo)+
      run(fmtMoney(imp)+' ('+impWords+')', oCuerpoB)+
      run('1', oCuerpoSup)+
      run(', monto actualizado de conformidad con el art\u00edculo 67, de la Ley del Banco de M\u00e9xico, a la cuenta que le lleva Banco de M\u00e9xico a ', oCuerpo)+
      run(inst+',', oCuerpoB)+
      run(' y los fondos sean acreditados en la cuenta ', oCuerpo)+
      run('385.05.03.11-5', oCuerpoB)+
      run(' \u201cMultas impuestas conforme al Art. 36 Bis de la L.B.M. \u2013 DGSPIM.\u201d', oCuerpoB)
    )}
    ${empty()}
    ${para(run('Agradeceremos a ustedes realizar el tr\u00e1mite respectivo tomando en cuenta el archivo que se adjunta y les solicitamos nos env\u00eden copia del documento contable que se genere.', oCuerpo))}
    ${empty()}${empty()}
    ${para(run('A t e n t a m e n t e ,', oCuerpoB), 'center')}
    ${empty('center')}${empty('center')}${empty('center')}${empty('center')}
    ${para(run('Gerencia de Supervisi\u00f3n de Sistemas de Pagos', oCuerpoB), 'center')}
    ${para(run('e Infraestructuras de Mercado', oCuerpoB), 'center')}
    <w:p>
      <w:pPr>
        <w:jc w:val="left"/>
        <w:spacing w:before="1800" w:after="0"/>
        <w:keepWithNext/>
        <w:ind w:right="6000"/>
        <w:pBdr><w:top w:val="single" w:sz="6" w:space="4" w:color="000000"/></w:pBdr>
      </w:pPr>
      <w:r><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/><w:sz w:val="18"/></w:rPr><w:t xml:space="preserve"> </w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr>
        <w:jc w:val="left"/>
        <w:spacing w:before="0" w:after="0"/>
        <w:keepLines/>
      </w:pPr>
      <w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/><w:sz w:val="24"/><w:szCs w:val="24"/><w:vertAlign w:val="superscript"/></w:rPr><w:t>1</w:t></w:r>
      <w:r><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr><w:t xml:space="preserve"> ${NOTA_TEXT}</w:t></w:r>
    </w:p>
  `;

  // ── Pie de página: solo "Uso Limitado" ──
  const footerXml=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="0" w:after="0"/></w:pPr>
    <w:r><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/><w:b/><w:sz w:val="22"/><w:szCs w:val="22"/><w:color w:val="C00000"/></w:rPr><w:t>Uso Limitado</w:t></w:r>
  </w:p>
  <w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="0" w:after="0"/></w:pPr>
    <w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="12"/><w:szCs w:val="12"/></w:rPr><w:t>Informaci\u00f3n cuyo acceso est\u00e1 restringido a un grupo limitado de personas empleadas por el Banco de M\u00e9xico y, en su caso, personas ajenas al mismo.</w:t></w:r>
  </w:p>
</w:ftr>`;

  const docXml=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<w:body>
${body}
<w:sectPr>
  <w:footerReference w:type="default" r:id="rId1"/>
  <w:pgSz w:w="12240" w:h="15840"/>
  <w:pgMar w:top="1440" w:right="1701" w:bottom="720" w:left="1701" w:header="709" w:footer="709" w:gutter="0"/>
</w:sectPr>
</w:body>
</w:document>`;

  const relsXml=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>
</Relationships>`;

  const contentTypes=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>
</Types>`;

  const mainRels=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

  const zip=new JSZip();
  zip.file('[Content_Types].xml',contentTypes);
  zip.file('_rels/.rels',mainRels);
  zip.file('word/document.xml',docXml);
  zip.file('word/footer1.xml',footerXml);
  zip.file('word/_rels/document.xml.rels',relsXml);

  const blob=await zip.generateAsync({type:'blob',mimeType:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
  download(blob,`UL_${memo}.docx`);
  showAlert('ok',`\u2705 Memorando generado: UL_${memo}.docx`);
}

function generateAll(){
  const errs=[...new Set([...validate(false),...validate(true)])];
  if(errs.length){showAlert('err','\u26a0 '+errs.join(' \u00b7 '));return;}
  generateExcel();
  setTimeout(()=>generateWord(),600);
}

updPreview();
