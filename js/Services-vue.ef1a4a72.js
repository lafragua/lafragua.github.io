(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Services-vue"],{"422e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout_page",[a("section",{staticClass:"header services_header font_smooth"},[a("div",{staticClass:"bg image"}),a("div",{staticClass:"column flex_content-vertical ai_center jc_center"},[a("div",{staticClass:"structure"}),a("div",{staticClass:"margin-bottom--md anime fadeInBottom one"},[a("h1",{staticClass:"text--xxxl text--uppercase text--ls-sm"},[t._v("Servicios "),a("span",[t._v("&")]),t._v(" Fabricación")])]),a("div",{staticClass:"anime fadeInBottom two"},[a("p",{staticClass:"text--uppercase text--ls-sm"},[t._v("Soluciones en contrucción con acero")])])]),a("i",{staticClass:"scroll_marker anime fadeInBottom three"})]),a("section",{staticClass:"services"},[a("div",{staticClass:"column"},t._l(t.allServices,function(e){return a("div",{key:e.pk,staticClass:"service"},[a("div",{staticClass:"grid grid-phi"},[a("div",[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"service_image"},[a("img",{attrs:{src:t._f("ress")(e.img),alt:e.img.description}})])])]),a("div",[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"sec_title"},[a("span",[t._v(t._s(e.pk))]),a("h3",[t._v(t._s(e.type))])]),a("div",{staticClass:"margin-bottom--xxl"},[a("h2",{staticClass:"text--xxl"},[t._v(t._s(e.name))])]),a("div",{staticClass:"margin-bottom--xxl"},[a("p",[t._v(t._s(e.short_description))])]),e.description?a("slug-link",{staticClass:"btn btn--secondary",attrs:{route:"modal_service",name:e.name,pk:e.pk}},[a("span",[t._v("Conoce más")])]):t._e(),e.externalLink?a("a",{staticClass:"btn btn--secondary",attrs:{href:e.externalLink,alt:e.name,target:"_blank"}},[a("span",[t._v("Conoce más")])]):t._e()],1)])])])}),0)]),a("transition",{attrs:{name:"modal_transition"}},[a("router-view")],1)],1)},i=[],n=(a("7f7f"),a("a8f8")),o=a("5a72"),r=a.n(o),c=a("2ada"),l={name:"page_services",components:{layout_page:n["a"],SlugLink:c["a"]},metaInfo:function(){return{title:"Servicios",meta:[{vmid:"dtn",name:"description",content:"Soluciones en contrucción con acero"},{vmid:"kw",name:"keywords",content:"La fragua, constructora, servicios, construcción con acero, estructuras metálicas, grúas, marcos para túneles, armaduras, estructuras, losacero, lámina cubierta, generadores eléctricos, maquinaria para construcción"},{vmid:"inm",itemprop:"name",content:"La Fragua | Servicios"},{vmid:"idtn",itemprop:"description",content:"Soluciones en contrucción con acero"},{vmid:"ptt",property:"og:title",content:"La Fragua | Servicios"},{vmid:"purl",property:"og:url",content:"https://lafragua.mx/servicios"},{vmid:"pdtn",property:"og:description",content:"Soluciones en contrucción con acero"},{vmid:"tdtn",name:"twitter:description",content:"Soluciones en contrucción con acero"},{vmid:"twtt",name:"twitter:title",content:"La Fragua | Servicios"}]}},methods:{initAnimations:function(t){var e=this.$el,a=r.a.timeline();setTimeout(function(){t||a.add({targets:e.querySelector("section.header"),scale:[.8,1],easing:"easeOutExpo"}),a.add({targets:e.querySelector(".anime.fadeInBottom.one"),translateY:[30,0],opacity:[0,1],easing:"easeOutExpo"}).add({targets:e.querySelector(".anime.fadeInBottom.two"),translateY:[30,0],opacity:[0,1],easing:"easeOutExpo"}).add({targets:e.querySelector(".anime.fadeInBottom.three"),translateY:[30,0],opacity:[0,1],easing:"easeOutExpo"})},t?0:2400)}},mounted:function(){this.initAnimations(this.$store.getters.isCurtainShown),this.$store.commit("desactiveCurtain")},computed:{allServices:function(){return this.$store.getters.allServices}},watch:{$route:function(t,e){"page_services"==t.name&&this.initAnimations(!0)}}},m=l,u=a("2877"),d=Object(u["a"])(m,s,i,!1,null,null,null);d.options.__file="Services.vue";e["default"]=d.exports}}]);
//# sourceMappingURL=Services-vue.ef1a4a72.js.map