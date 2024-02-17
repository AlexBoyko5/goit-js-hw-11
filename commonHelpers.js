import{S as c,i as n}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const u=new c(".gallery a");function f(i){const r=document.querySelector(".gallery");r.innerHTML=i.map(e=>`
    <div class="photo-card">
      <a href="${e.largeImageURL}" target="_blank">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><i class="material-icons">thumb_up</i>${e.likes}</p>
        <p><i class="material-icons">visibility</i>${e.views}</p>
        <p><i class="material-icons">comment</i>${e.comments}</p>
        <p><i class="material-icons">cloud_download</i>${e.downloads}</p>
      </div>
    </div>
  `).join(""),u.refresh()}const d="42334631-07f239856d3b6a49db441bfb9";function m(i){const r=document.querySelector(".loader");r.style.display="block",fetch(`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>{console.log(e),r.style.display="none",e.hits.length===0?n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):f(e.hits)}).catch(e=>{console.error("Error fetching images:",e),r.style.display="none",n.error({title:"Error",message:"Failed to fetch images. Please try again later."})})}const p=document.querySelector("#search-form"),l=document.querySelector("#search-input");p.addEventListener("submit",i=>{i.preventDefault();const r=l.value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query"});return}m(r),l.value=""});
//# sourceMappingURL=commonHelpers.js.map
