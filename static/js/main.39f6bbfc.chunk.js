(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(21),n=c.n(s),r=c(19),i=c(11),d=c(8),o=c(7),j=c(2),l=function(){return Object(j.f)().pathname},h=c(0),u=function(e){var t=l(),c=e.uniqueItemsQuantity,s=Object(a.useState)("/"),n=Object(d.a)(s,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){switch(t){case"/":i("home");break;case"/products":i("products");break;case"/cart":i("cart");break;default:i("/")}}),[t]),Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsx)(o.b,{to:"/",children:Object(h.jsx)("h1",{children:"FakeStore"})}),Object(h.jsxs)("ul",{className:"page-switch-buttons",children:[Object(h.jsx)(o.b,{to:"/",children:Object(h.jsx)("li",{className:"home ".concat("home"===r?"highlight":""),children:"Home"})}),Object(h.jsx)(o.b,{to:"/products",children:Object(h.jsx)("li",{className:"products ".concat("products"===r?"highlight":""),children:"Products"})}),Object(h.jsx)(o.b,{to:"/cart",children:Object(h.jsx)("li",{className:"cart ".concat("cart"===r?"highlight":""),children:Object(h.jsx)("div",{className:"shopping-qiantity-indicator ".concat(0===c?"hidden":""),children:c})})})]})]})},b=function(){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsxs)("a",{href:"https://github.com/JakubKida/shopping-cart",target:"_blank",rel:"noreferrer",children:["GitHub/JakubKida",Object(h.jsx)("i",{className:"fab fa-github"})]})})},p=function(e){var t=function(t){e.removeFromCart(t.target.dataset.index)},c=function(t){e.changeItemAmount(t.target.dataset.index,t.target.value)};return Object(h.jsxs)("div",{className:"cart-page",children:[e.shoppingCart.length>0?Object(h.jsxs)("div",{className:"card-table-wrapper",children:[Object(h.jsx)("h1",{children:"Your Cart"}),Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"hide-on-mobile"}),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Qty"}),Object(h.jsx)("th",{children:"Price"}),Object(h.jsx)("th",{})]}),e.shoppingCart.map((function(e,a){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"image",children:Object(h.jsx)("img",{src:e.item.image,alt:e.item.image})}),Object(h.jsx)("td",{className:"name",children:e.item.title}),Object(h.jsx)("td",{className:"change-amount",children:Object(h.jsx)("input",{"data-index":e.item.id,type:"number",min:"1",value:e.quantity,onChange:c})}),Object(h.jsxs)("td",{className:"price",children:[e.item.price,"$"]}),Object(h.jsx)("td",{className:"remove",children:Object(h.jsx)("button",{"data-index":e.item.id,onClick:t})})]},a)})),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"empty"}),Object(h.jsx)("td",{className:"empty hide-on-mobile"}),Object(h.jsx)("th",{className:"total-label",children:"Total:"}),Object(h.jsxs)("td",{className:"price total-price",children:[e.shoppingCart.reduce((function(e,t){return t.item.price*t.quantity+e}),0).toFixed(2),"$"]})]})]})}),Object(h.jsx)("button",{className:"proceed-checkout",children:"Proceed to checkout"})]}):Object(h.jsxs)("div",{className:"card-table-wrapper",children:[Object(h.jsx)("h1",{children:"Your Cart"}),Object(h.jsx)("div",{className:"empty-cart-message",children:"Your cart is empty."})]}),Object(h.jsx)(b,{})]})},m=function(){return Object(h.jsxs)("div",{className:"main-page-outer",children:[Object(h.jsxs)("div",{className:"main-page",children:[Object(h.jsxs)("div",{className:"description",children:[Object(h.jsx)("h1",{children:"Shopping, redefined"}),Object(h.jsx)("p",{children:"We offer highest quality products at low prices with international shipping. Our customers enjoyment has always been our highest priority. Ready to find out how real online shopping feels?"}),Object(h.jsx)(o.b,{to:"/products",children:Object(h.jsx)("button",{className:"goto-shop-button",children:"Start shopping"})})]}),Object(h.jsx)("img",{src:"assets/shopping.svg",alt:"shopping",onLoad:function(e){e.target.className="loaded"}})]}),Object(h.jsx)(b,{})]})},x=c(10),O=c.n(x),g=c(15),f=function(e){var t=e.match,c=e.addToCart,s=Object(a.useState)({}),n=Object(d.a)(s,2),r=n[0],i=n[1];Object(a.useEffect)((function(){o()}));var o=function(){var e=Object(g.a)(O.a.mark((function e(){var c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/".concat(t.params.id));case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,i(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"product-detail-page",children:[0!==Object.keys(r).length&&r.constructor===Object&&Object(h.jsxs)("div",{className:"product-card",children:[Object(h.jsx)("div",{className:"product-image",children:Object(h.jsx)("img",{src:r.image,alt:r.image})}),Object(h.jsxs)("div",{className:"product-details",children:[Object(h.jsx)("div",{className:"product-details-title",children:r.title}),Object(h.jsxs)("div",{className:"product-details-category",children:[Object(h.jsx)("span",{children:"Category: "}),r.category]}),Object(h.jsxs)("div",{className:"product-details-rating",children:[Object(h.jsx)("span",{children:"Rating: "}),r.rating.rate," (",r.rating.count," votes)"]}),Object(h.jsxs)("div",{className:"product-details-description",children:[Object(h.jsxs)("span",{children:["Description: ",Object(h.jsx)("br",{})]}),r.description]}),Object(h.jsxs)("div",{className:"product-details-price",children:[r.price,"$",Object(h.jsx)("div",{className:"add-to-cart",onClick:function(){c(r)},children:"Add to cart"})]})]})]}),Object(h.jsx)(b,{})]})},v=function(e){var t=e.product,c=t.title,a=t.price,s=t.image;return Object(h.jsxs)("div",{className:"product-cell",children:[Object(h.jsx)("img",{className:"product-image",src:s,alt:c}),Object(h.jsx)("div",{className:"product-name",children:c}),Object(h.jsxs)("div",{className:"product-price",children:[a,"$"]}),Object(h.jsxs)("div",{className:"add-details-buttons",children:[Object(h.jsx)("div",{className:"add-to-cart",onClick:function(t){t.preventDefault(),e.addToCart(e.product)},children:"Add to cart"}),Object(h.jsx)(o.b,{to:"products/".concat(e.product.id),children:Object(h.jsx)("div",{className:"see-details",children:"See details"})})]})]})},N=function(e){return Object(h.jsx)("div",{className:"products-grid",children:e.products.filter((function(t){return e.checkedCategories.includes(t.category)})).map((function(t){return Object(h.jsx)(v,{addToCart:e.addToCart,product:t},t.id)}))})},y=function(e){var t=Object(a.useState)([]),c=Object(d.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)([!0,!0,!0,!0]),o=Object(d.a)(r,2),j=o[0],l=o[1],u=Object(a.useState)(["electronics","jewelery","men's clothing","women's clothing"]),p=Object(d.a)(u,2),m=p[0],x=p[1];Object(a.useEffect)((function(){f()}));var f=function(){var e=Object(g.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){j[e.target.dataset.index]=!j[e.target.dataset.index],!0===j[e.target.dataset.index]?(m.push(e.target.dataset.name),x(Object(i.a)(m))):x(m.filter((function(t){return t!==e.target.dataset.name}))),l.apply(void 0,[j])};return Object(h.jsxs)("div",{className:"products-page",children:[Object(h.jsxs)("div",{className:"check-categories",children:[Object(h.jsx)("input",{"data-index":"0","data-name":"electronics",id:"electronics",type:"checkbox",onChange:v,checked:j[0]}),Object(h.jsx)("label",{htmlFor:"electronics",children:"electronics"}),Object(h.jsx)("input",{"data-index":"1","data-name":"jewelery",id:"jewelery",type:"checkbox",onChange:v,checked:j[1]}),Object(h.jsx)("label",{htmlFor:"jewelery",children:"jewelery"}),Object(h.jsx)("input",{"data-index":"2","data-name":"men's clothing",id:"men-cloth",type:"checkbox",onChange:v,checked:j[2]}),Object(h.jsx)("label",{htmlFor:"men-cloth",children:"men's clothing"}),Object(h.jsx)("input",{"data-index":"3","data-name":"women's clothing",id:"women-cloth",type:"checkbox",onChange:v,checked:j[3]}),Object(h.jsx)("label",{htmlFor:"women-cloth",children:"women's clothing"})]}),Object(h.jsx)(N,{addToCart:e.addToCart,products:s,checkedCategories:m}),Object(h.jsx)(b,{})]})},k=(c(35),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],n=function(e){var t=c.findIndex((function(t){return t.item.id===e.id}));-1!==t?c[t].quantity++:c.push({item:e,quantity:1}),s(Object(i.a)(c))},l=function(e){var t=c.findIndex((function(t){return t.item.id===parseInt(e)}));-1!==t&&(c.splice(t,1),s(Object(i.a)(c)))},b=function(e,t){var a=c.findIndex((function(t){return t.item.id===parseInt(e)}));-1!==a&&(c[a].quantity=t,s(Object(i.a)(c)))};return Object(h.jsx)("div",{className:"main-wrapper",children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(u,{uniqueItemsQuantity:c.reduce((function(e,t){return parseInt(t.quantity)+e}),0)}),Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{exact:!0,path:"/",component:m}),Object(h.jsx)(j.a,{exact:!0,path:"/products",render:function(e){return Object(h.jsx)(y,{addToCart:n})}}),Object(h.jsx)(j.a,{exact:!0,path:"/products/:id",render:function(e){return Object(h.jsx)(f,Object(r.a)(Object(r.a)({},e),{},{addToCart:n}))}}),Object(h.jsx)(j.a,{exact:!0,path:"/cart",render:function(e){return Object(h.jsx)(p,{shoppingCart:c,addToCart:n,removeFromCart:l,changeItemAmount:b})}})]})]})})});n.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.39f6bbfc.chunk.js.map