(this.webpackJsonpsolitaire=this.webpackJsonpsolitaire||[]).push([[0],{34:function(e,n,a){},39:function(e,n,a){},40:function(e,n,a){},42:function(e,n,a){},43:function(e,n,a){},44:function(e,n,a){},45:function(e,n,a){},46:function(e,n,a){},47:function(e,n,a){},48:function(e,n,a){"use strict";a.r(n);var t,c,r=a(0),i=a.n(r),d=a(13),o=a.n(d),s=(a(34),a(12)),u=(a(39),a(53)),l=a(27),j=function(){return Object(s.b)()},f=s.c,b=function(e){return e.game},v=a(5),O=a(16),p=a(28),h=a(55),g=a(17);!function(e){e.clubs="\u2663",e.spades="\u2660",e.diamonds="\u2666",e.hearts="\u2665"}(t||(t={})),function(e){e[e.ace=0]="ace",e[e.two=1]="two",e[e.three=2]="three",e[e.four=3]="four",e[e.five=4]="five",e[e.six=5]="six",e[e.seven=6]="seven",e[e.eight=7]="eight",e[e.nine=8]="nine",e[e.ten=9]="ten",e[e.jack=10]="jack",e[e.queen=11]="queen",e[e.king=12]="king"}(c||(c={}));var m,k=a(3),x=[c.ace,c.two,c.three,c.four,c.five,c.six,c.seven,c.eight,c.nine,c.ten,c.jack,c.queen,c.king],C=[t.clubs,t.spades,t.hearts,t.diamonds],y=(m={},Object(k.a)(m,c.ace,"A"),Object(k.a)(m,c.two,"2"),Object(k.a)(m,c.three,"3"),Object(k.a)(m,c.four,"4"),Object(k.a)(m,c.five,"5"),Object(k.a)(m,c.six,"6"),Object(k.a)(m,c.seven,"7"),Object(k.a)(m,c.eight,"8"),Object(k.a)(m,c.nine,"9"),Object(k.a)(m,c.ten,"10"),Object(k.a)(m,c.jack,"J"),Object(k.a)(m,c.queen,"Q"),Object(k.a)(m,c.king,"K"),m);function w(e){return[t.diamonds,t.hearts].includes(e)}function T(e,n){var a=e.revealed&&n.revealed,t=+e.value+1===+n.value,c=w(e.symbol)!==w(n.symbol);return a&&t&&c}function D(e,n){var a=!e.cardOnTop,t=e.revealed&&n.revealed,c=+e.value===+n.value+1,r=e.symbol===n.symbol;return a&&t&&c&&r}var N=function(e){return e.value===c.king},P=function(e){return e.value===c.ace};function I(e){return function(e){var n,a=e.length;for(;0!==a;){n=Math.floor(Math.random()*a),a--;var t=[e[n],e[a]];e[a]=t[0],e[n]=t[1]}return e}(e)}function E(e){var n=I(C.reduce((function(e,n){var a=x.map((function(e){return{id:y[e]+n,symbol:n,value:e,revealed:!1}}));return e.concat(a)}),[])),a=0;Object.keys(e.piles).forEach((function(t,c){var r=a+c+1,i=n.slice(a,r);i[0].revealed=!0,e.piles[t]=function(e){if(!e.length)throw Error("CardData[] can not be empty");var n=e.shift();return e.reduce((function(e,n){return n.cardOnTop=e,n}),n)}(i),a=r})),e.stock=n.slice(a),e.waste=[],Object.keys(e.foundations).forEach((function(n,a){e.foundations[n]=void 0}))}function B(e){var n=function e(n){return!!n&&(n.cardOnTop?e(n.cardOnTop):n.value===c.king)};return Object.keys(e.foundations).reduce((function(a,t){return a&&n(e.foundations[t])}),!0)}var S={piles:{p0:void 0,p1:void 0,p2:void 0,p3:void 0,p4:void 0,p5:void 0,p6:void 0},foundations:{f0:void 0,f1:void 0,f2:void 0,f3:void 0},stock:[],waste:[],movesCounter:0,gameEnded:!1},q=Object(g.b)({name:"game",initialState:S,reducers:{move:function(e,n){!function(e,n,a){for(var t,c=function e(a){a.cardOnTop&&(a.cardOnTop.id===n?(t=a.cardOnTop,a.cardOnTop=void 0):e(a.cardOnTop))},r=function e(n){if(n)if(n.id===a){if(void 0!==n.cardOnTop)throw Error("There is already a card on top!");n.cardOnTop=t}else e(n.cardOnTop)},i=0,d=Object.keys(e.piles);i<d.length;i++){var o=d[i];if(e.piles[o]){if(e.piles[o].id===n){t=e.piles[o],e.piles[o]=void 0;break}c(e.piles[o])}}if(!t)for(var s=0,u=Object.keys(e.foundations);s<u.length;s++){var l=u[s];if(e.foundations[l]){if(e.foundations[l].id===n){t=e.foundations[l],e.foundations[l]=void 0;break}c(e.foundations[l])}}if(!t)for(var j=0;j<e.waste.length;j++){var f=e.waste[j];if(f.id===n){t=f,e.waste.splice(j,1);break}}for(var b=0,v=Object.keys(e.piles);b<v.length;b++){var O=v[b];O===a?e.piles[O]=t:r(e.piles[O])}for(var p=0,h=Object.keys(e.foundations);p<h.length;p++){var g=h[p];g===a?e.foundations[g]=t:r(e.foundations[g])}}(e,n.payload.cardId,n.payload.targetId),e.movesCounter+=1,e.gameEnded=B(e)},restart:function(e){e.gameEnded=!1,e.movesCounter=0,E(e)},reveal:function(e,n){!function(e,n){for(var a=function e(a){a&&(a.id===n?a.revealed=!0:e(a.cardOnTop))},t=0,c=Object.keys(e.piles);t<c.length;t++){var r=c[t];a(e.piles[r])}}(e,n.payload.cardId)},draw:function(e){e.stock.length&&(e.movesCounter+=1),function(e){if(e.stock.length){var n=e.stock.shift();e.waste.push(Object(v.a)(Object(v.a)({},n),{},{revealed:!0}))}else e.stock=e.waste.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{revealed:!1})})),e.waste=[]}(e)}}}),F=q.actions,M=a(8),_=a.n(M),H=(a(40),a(1));var J=function(e){var n,a=e.card;return Object(H.jsxs)("div",{className:_()({card:!0,"card--red":w(a.symbol),"card--black":(n=a.symbol,[t.spades,t.clubs].includes(n)),"card--back":!a.revealed,"card--pointer":!a.revealed&&!a.cardOnTop}),children:[Object(H.jsx)("div",{className:"card__sign",children:y[a.value]}),Object(H.jsx)("div",{className:"card__symbol",children:a.symbol})]})},A=a(54),L="CARD";a(42);var K=function(e){var n=e.onDropHandler,a=e.canDropPredicate,t=Object(A.a)((function(){return{accept:L,canDrop:a,drop:n,collect:function(e){return{isSomethingDragging:!!e.getClientOffset(),isOver:e.isOver(),canDrop:e.canDrop()}}}}),[a,n]),c=Object(O.a)(t,2),r=c[0],i=r.canDrop,d=r.isOver,o=r.isSomethingDragging,s=c[1];return Object(H.jsx)("div",{className:_()({"card-well":!0,"card-well--can-drop":d&&i,"card-well--can-not-drop":d&&!i,"card-well--clickable":o}),ref:s,style:{backgroundColor:d?i?"yellowgreen":"red":"blue"}})},Q=(a(43),["card"]);var R=function e(n){var a=n.card,t=Object(p.a)(n,Q),c=j(),i=Object(h.a)((function(){return{type:L,item:a,canDrag:function(){return a.revealed},collect:function(e){return{isDragging:e.isDragging()}}}}),[a]),d=Object(O.a)(i,2),o=d[0].isDragging,s=d[1],u=Object(r.useCallback)((function(e){return c(F.move({cardId:e.id,targetId:a.id}))}),[a]),l=Object(r.useCallback)((function(e){return t.canPutCardOnCard(e,a)}),[a,t.canPutCardOnCard]),f=Object(r.useCallback)((function(){a.revealed||a.cardOnTop||c(F.reveal({cardId:a.id}))}),[a]);return Object(H.jsxs)("div",{className:"card-layout",ref:s,style:{opacity:o?0:1},onClick:f,children:[Object(H.jsx)("div",{className:_()({"card-layout-item":!0,"card-layout-item--stacked":t.stacked}),children:Object(H.jsx)(J,{card:a})}),Object(H.jsx)("div",{className:"card-layout-item",children:a.cardOnTop?Object(H.jsx)(e,Object(v.a)({card:a.cardOnTop},t)):Object(H.jsx)(K,{onDropHandler:u,canDropPredicate:l})})]})};a(44);var Y=function(e){var n=e.stock,a=e.waste,t=j(),c=Object(r.useCallback)((function(){t(F.draw())}),[]),i=n[0],d=a[a.length-2],o=a[a.length-1];return Object(H.jsxs)("div",{className:"deck-container",children:[Object(H.jsx)("div",{onClick:c,children:i?Object(H.jsx)(J,{card:i}):Object(H.jsx)("div",{className:"deck-placeholder"})}),Object(H.jsxs)("div",{className:"deck-waste",children:[Object(H.jsx)("div",{className:"deck-waste-stacked",children:d?Object(H.jsx)(J,{card:d}):null}),Object(H.jsx)("div",{children:o?Object(H.jsx)(R,{card:o,canPutCardOnCard:function(){return!1}}):null})]})]})};a(45);function z(){var e=j(),n=f((function(e){return e.game.movesCounter})),a=f((function(e){return e.game.gameEnded}));return Object(H.jsxs)("div",{className:"game-control-bar",children:[Object(H.jsx)("button",{onClick:function(){return e(F.restart())},children:"restart"}),Object(H.jsxs)("div",{children:["Moves: ",n]}),Object(H.jsx)("div",{children:a?"You win!":null})]})}a(46);var G=function(e){var n=e.id,a=e.card,t=e.stacked,c=e.canPutCardOnCard,i=e.canPutOnPileBase,d=j(),o=Object(r.useCallback)((function(e){return d(F.move({cardId:e.id,targetId:n}))}),[n]);return Object(H.jsxs)("div",{className:"container",children:[Object(H.jsx)("div",{className:"card-placeholder"}),a?Object(H.jsx)(R,{card:a,canPutCardOnCard:c,stacked:t}):Object(H.jsx)(K,{onDropHandler:o,canDropPredicate:i})]})};var U=function(e){var n=P,a=D;return Object(H.jsx)(G,Object(v.a)(Object(v.a)({},e),{},{canPutOnPileBase:n,canPutCardOnCard:a,stacked:!0}))};var V=function(e){var n=N,a=T;return Object(H.jsx)(G,Object(v.a)(Object(v.a)({},e),{},{canPutOnPileBase:n,canPutCardOnCard:a}))};a(47);var W=function(e){var n=f(b);return Object(H.jsx)(u.a,{backend:l.a,children:Object(H.jsxs)("div",{className:"tableau",children:[Object(H.jsx)(z,{}),Object(H.jsxs)("div",{className:"top-container",children:[Object(H.jsx)(Y,{stock:n.stock,waste:n.waste}),Object(H.jsxs)("div",{className:"card-pile-row",children:[Object(H.jsx)(U,{id:"f0",card:n.foundations.f0}),Object(H.jsx)(U,{id:"f1",card:n.foundations.f1}),Object(H.jsx)(U,{id:"f2",card:n.foundations.f2}),Object(H.jsx)(U,{id:"f3",card:n.foundations.f3})]})]}),Object(H.jsxs)("div",{className:"card-pile-row",children:[Object(H.jsx)(V,{id:"p0",card:n.piles.p0}),Object(H.jsx)(V,{id:"p1",card:n.piles.p1}),Object(H.jsx)(V,{id:"p2",card:n.piles.p2}),Object(H.jsx)(V,{id:"p3",card:n.piles.p3}),Object(H.jsx)(V,{id:"p4",card:n.piles.p4}),Object(H.jsx)(V,{id:"p5",card:n.piles.p5}),Object(H.jsx)(V,{id:"p6",card:n.piles.p6})]})]})})},X=Object(g.a)({reducer:{game:q.reducer}});var Z=function(){return Object(H.jsx)(s.a,{store:X,children:Object(H.jsx)(W,{})})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,56)).then((function(n){var a=n.getCLS,t=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;a(e),t(e),c(e),r(e),i(e)}))};o.a.render(Object(H.jsx)(i.a.StrictMode,{children:Object(H.jsx)(Z,{})}),document.getElementById("root")),$()}},[[48,1,2]]]);
//# sourceMappingURL=main.eb092783.chunk.js.map