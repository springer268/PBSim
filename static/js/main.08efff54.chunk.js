(this["webpackJsonppokemon-battle-simulator"]=this["webpackJsonppokemon-battle-simulator"]||[]).push([[0],{106:function(e,t){},149:function(e,t,n){"use strict";n.r(t);var a,r,c,o=n(0),l=n.n(o),i=n(37),u=n.n(i),s=n(4),m=n(70),p=n.n(m),b=n(5),f=n(1),d=n(27),O=n(6),j=n(2);!function(e){e[e.Teams=0]="Teams",e[e.Team=1]="Team",e[e.SearchPokemon=2]="SearchPokemon",e[e.EditPokemon=3]="EditPokemon",e[e.SelectMove=4]="SelectMove"}(a||(a={})),function(e){e[e.Nothing=0]="Nothing",e[e.Moves=1]="Moves",e[e.Pokemon=2]="Pokemon",e[e.Stats=3]="Stats",e[e.Items=4]="Items",e[e.Abilities=5]="Abilities",e[e.Misc=6]="Misc"}(r||(r={}));var v={currentView:Object(f.atom)({key:"teambuilder-currentView",default:a.Teams}),currentViewSecondary:Object(f.atom)({key:"teambuilder-currentViewSecondary",default:r.Nothing}),teams:Object(f.atom)({key:"teambuilder-teams",default:JSON.parse(null!==(c=localStorage.getItem("teams"))&&void 0!==c?c:"[]")}),currentTeamID:Object(f.atom)({key:"teambuilder-currentTeamID",default:0}),currentPokemonIndex:Object(f.atom)({key:"teambuilder-currentPokemonIndex",default:0}),allPokemon:Object(f.atom)({key:"teambuilder-allPokemon",default:null!==localStorage.getItem("allPokemon")?new Map(JSON.parse(localStorage.getItem("allPokemon"))):new Map}),allMoves:Object(f.atom)({key:"teambuilder-allMoves",default:null!==localStorage.getItem("allMoves")?new Map(JSON.parse(localStorage.getItem("allMoves"))):new Map}),allItems:Object(f.atom)({key:"teambuilder-allItems",default:null!==localStorage.getItem("allItems")?new Map(JSON.parse(localStorage.getItem("allItems"))):new Map}),allAbilities:Object(f.atom)({key:"teambuilder-allAbilities",default:null!==localStorage.getItem("allAbilities")?new Map(JSON.parse(localStorage.getItem("allAbilities"))):new Map}),editPokemonInput:Object(f.atom)({key:"teambuilder-editPokemonInput",default:""}),currentMoveIndex:Object(f.atom)({key:"teambuilder-currentMoveIndex",default:0})};function g(){var e=Object(s.a)(["\n\tpadding: 5px 10px;\n\tmin-width: 200px;\n\tmargin: ",";\n\n\toption {\n\t\tpadding: 10px;\n\t}\n"]);return g=function(){return e},e}function x(){var e=Object(s.a)(["\n\tpadding: 10px;\n\twidth: 100%;\n\tborder-radius: 0;\n\tborder: solid 1px #ddd;\n\toutline: none;\n"]);return x=function(){return e},e}function k(){var e=Object(s.a)(["\n\ttext-decoration: none;\n\tcolor: #000;\n"]);return k=function(){return e},e}function h(){var e=Object(s.a)(["\n\tbackground: var(--bg-main);\n\tborder: none;\n\tpadding: 5px 10px;\n\tcolor: white;\n\tfont-weight: 500;\n\toutline: none;\n\tcursor: pointer;\n\tmargin: 15px 0;\n\tdisplay: block;\n"]);return h=function(){return e},e}function E(){var e=Object(s.a)(["\n\tmargin: 0 60px 0 36px;\n"]);return E=function(){return e},e}function S(){var e=Object(s.a)(["\n\tfont-size: 38px;\n\tmargin: 15px 0;\n"]);return S=function(){return e},e}function y(){var e=Object(s.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 110px auto;\n"]);return y=function(){return e},e}var w=b.b.div(y()),R=b.b.h1(S()),P=b.b.div(E()),I=b.b.button(h()),M=Object(b.b)(d.b)(k()),N=b.b.input(x()),T=b.b.select(g(),(function(e){return e.marginless?"0":"15px 0"}));function C(){var e=Object(s.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 50px;\n\tbackground: var(--bg-main);\n\tjustify-content: space-between;\n\n\t"," {\n\t\tdisplay: flex;\n\n\t\th1 {\n\t\t\tmargin: auto 15px;\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\n\tbutton {\n\t\twidth: 100px;\n\t\tfont-size: 18px;\n\t\tcursor: pointer;\n\t}\n"]);return C=function(){return e},e}var F=b.b.nav(C(),M),A=function(e){var t=Object(f.useRecoilState)(v.currentView),n=Object(j.a)(t,2),a=(n[0],n[1],Object(f.useRecoilState)(v.teams)),r=Object(j.a)(a,2),c=(r[0],r[1],Object(f.useRecoilState)(v.currentTeamID)),o=Object(j.a)(c,2),i=(o[0],o[1],Object(f.useRecoilState)(v.currentPokemonIndex)),u=Object(j.a)(i,2),s=(u[0],u[1],Object(f.useRecoilState)(v.allPokemon)),m=Object(j.a)(s,2),p=(m[0],m[1],Object(f.useRecoilState)(v.allMoves)),b=Object(j.a)(p,2);b[0],b[1];return l.a.createElement(F,null,l.a.createElement(M,{to:"/"},l.a.createElement("h1",null,"Pokemon Battle Simulator")))};function V(){var e=Object(s.a)(["\n\tbackground: var(--bg-secondary);\n\theight: 93vh;\n\tmin-height: 100%;\n\tmax-height: 100vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n"]);return V=function(){return e},e}var D=b.b.nav(V()),J=function(e){return l.a.createElement(D,null)};function z(){var e=Object(s.a)([""]);return z=function(){return e},e}var B=b.b.div(z()),_=function(e){return l.a.createElement(B,null,l.a.createElement(A,null),l.a.createElement(w,null,l.a.createElement(J,null),l.a.createElement(P,null,l.a.createElement(R,null,"Home"),l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement(M,{to:"/battle"},"Battle"),l.a.createElement(M,{to:"/teambuilder"},"Teambuilder")))))},U=n(17);function L(){var e=Object(s.a)(["\n\tborder: solid 1px #ddd;\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: black;\n\n\t.top {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\n\t\th2 {\n\t\t\t&:hover {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t}\n\n\t\t.icons {\n\t\t\tdisplay: flex;\n\n\t\t\ti {\n\t\t\t\tmargin: auto 15px auto 0;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t}\n\t}\n\n\tul {\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\n\t\tli {\n\t\t\tpadding: 10px;\n\t\t\ttext-align: center;\n\t\t\ttext-transform: capitalize;\n\n\t\t\t&:hover {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t}\n\t}\n\n\tp.fallback {\n\t\tmargin: 0px 0px 15px 15px;\n\t}\n"]);return L=function(){return e},e}var H=b.b.div(L()),Y=function(e){var t=Object(f.useRecoilState)(v.currentView),n=Object(j.a)(t,2),r=(n[0],n[1]),c=Object(f.useRecoilState)(v.teams),o=Object(j.a)(c,2),i=(o[0],o[1]),u=Object(f.useRecoilState)(v.currentTeamID),s=Object(j.a)(u,2),m=(s[0],s[1]),p=Object(f.useRecoilState)(v.currentPokemonIndex),b=Object(j.a)(p,2),d=(b[0],b[1]),O=Object(f.useRecoilState)(v.allPokemon),g=Object(j.a)(O,2),x=g[0],k=(g[1],Object(f.useRecoilState)(v.allMoves)),h=Object(j.a)(k,2),E=(h[0],h[1],e.team);return l.a.createElement(M,{to:"/teambuilder"},l.a.createElement(H,{key:E.id},l.a.createElement("div",{className:"top"},l.a.createElement("h2",{style:{margin:"15px 0 0 15px"},onClick:function(){m(E.id),r(a.Team)}},E.name),l.a.createElement("div",{className:"icons"},l.a.createElement("i",{title:"Add member to ".concat(E.name),className:"fa fa-plus",onClick:function(){m(E.id),r(a.SearchPokemon)}}),l.a.createElement("i",{title:"Delete ".concat(E.name),className:"fa fa-trash",onClick:function(){i((function(e){var t=e.filter((function(e){return e.id!==E.id}));return localStorage.setItem("teams",JSON.stringify(t)),t}))}}))),E.pokemon.length>0?l.a.createElement("ul",null,E.pokemon.map((function(e){var t=x.get(e.name);return l.a.createElement("li",{onClick:function(){m(E.id),d(e.index),r(a.EditPokemon)},key:e.index},l.a.createElement("img",{src:t.sprite,alt:e.name}))}))):l.a.createElement("p",{className:"fallback"},"This team has no Pokemon!")))},q=function(e){var t=Object(f.useRecoilState)(v.currentView),n=Object(j.a)(t,2),a=(n[0],n[1],Object(f.useRecoilState)(v.teams)),r=Object(j.a)(a,2),c=r[0],o=r[1],i=Object(f.useRecoilState)(v.currentTeamID),u=Object(j.a)(i,2),s=(u[0],u[1],Object(f.useRecoilState)(v.currentPokemonIndex)),m=Object(j.a)(s,2),p=(m[0],m[1],Object(f.useRecoilState)(v.allPokemon)),b=Object(j.a)(p,2),d=b[0],O=(b[1],Object(f.useRecoilState)(v.allMoves)),g=Object(j.a)(O,2);g[0],g[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null,l.a.createElement(M,{to:"/"},l.a.createElement(I,{style:{marginTop:"15px"}},"Back")),l.a.createElement(R,null,"Teambuilder"),l.a.createElement(I,{style:{marginBottom:"15px"},onClick:function(){o((function(e){var t=[{name:prompt("Enter a team name")||"Untitled",pokemon:[],id:e.length}].concat(Object(U.a)(e));return localStorage.setItem("teams",JSON.stringify(t)),t}))}},"Add new team"),l.a.createElement("div",{style:{marginBottom:"20px"}},c.length>0&&d.size>0?c.map((function(e){return l.a.createElement(Y,{team:e,key:e.id})})):l.a.createElement("p",null,"You have no teams!"))))};function G(){var e=Object(s.a)(["\n\tdisplay: flex;\n\theight: 155px;\n\tpadding-top: 15px;\n\tborder: solid 1px #ddd;\n\n\tdiv {\n\t\tmargin-right: 8px;\n\t}\n\n\t.form-control {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\tlabel {\n\t\t\tfont-weight: 500;\n\t\t}\n\n\t\tinput {\n\t\t\tmargin-top: 3px;\n\t\t\tpadding: 1px 3px;\n\t\t}\n\t}\n\n\t.pokemon-img {\n\t\tmargin: -13px 0;\n\t\tmargin-left: 20px;\n\t\tmargin-right: 15px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\twidth: 100px;\n\t\theight: 100px;\n\t}\n"]);return G=function(){return e},e}var K=b.b.div(G()),Q=function(e){var t=e.pokemon,n=Object(f.useRecoilState)(v.currentView),c=Object(j.a)(n,2),o=(c[0],c[1]),i=Object(f.useRecoilState)(v.teams),u=Object(j.a)(i,2),s=(u[0],u[1],Object(f.useRecoilState)(v.currentTeamID)),m=Object(j.a)(s,2),p=(m[0],m[1],Object(f.useRecoilState)(v.currentPokemonIndex)),b=Object(j.a)(p,2),d=(b[0],b[1],Object(f.useRecoilState)(v.allPokemon)),O=Object(j.a)(d,2),g=O[0],x=(O[1],Object(f.useRecoilState)(v.allMoves)),k=Object(j.a)(x,2),h=k[0],E=(k[1],Object(f.useRecoilState)(v.currentViewSecondary)),S=Object(j.a)(E,2),y=(S[0],S[1]),w=Object(f.useRecoilState)(v.editPokemonInput),R=Object(j.a)(w,2),P=(R[0],R[1]),I=Object(f.useRecoilState)(v.currentMoveIndex),M=Object(j.a)(I,2),N=(M[0],M[1]),T=g.get(t.name);return l.a.createElement(K,null,l.a.createElement("div",{className:"pokemon-img"},l.a.createElement("img",{src:T.sprite,alt:t.name}),l.a.createElement("div",{className:"form-control"},l.a.createElement("label",{htmlFor:""},"Pokemon"),l.a.createElement("input",{type:"text",placeholder:t.name,onClick:function(){o(a.EditPokemon),y(r.Pokemon)},onChange:function(e){P(e.target.value)}}))),l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"form-control"},l.a.createElement("label",{htmlFor:""},"Item"),l.a.createElement("input",{type:"text"}),l.a.createElement("label",{htmlFor:""},"Ability"),l.a.createElement("input",{type:"text"}))),l.a.createElement("div",{className:"moves"},l.a.createElement("div",{className:"form-control"},l.a.createElement("label",{htmlFor:""},"Moves"),[0,1,2,3].map((function(e){var n,c,i=null===(n=h.get(null===(c=t.moves[e])||void 0===c?void 0:c.name))||void 0===n?void 0:n.prettyName;return l.a.createElement("input",{placeholder:i||"",type:"text",onClick:function(){N(e),o(a.EditPokemon),y(r.Moves)},onChange:function(e){P(e.target.value)}})})))))},W=function(e){var t=Object(f.useRecoilState)(v.currentView),n=Object(j.a)(t,2),r=(n[0],n[1]),c=Object(f.useRecoilState)(v.teams),o=Object(j.a)(c,2),i=o[0],u=(o[1],Object(f.useRecoilState)(v.currentTeamID)),s=Object(j.a)(u,2),m=s[0],p=(s[1],Object(f.useRecoilState)(v.currentPokemonIndex)),b=Object(j.a)(p,2),d=(b[0],b[1]),O=Object(f.useRecoilState)(v.allPokemon),g=Object(j.a)(O,2),x=(g[0],g[1],Object(f.useRecoilState)(v.allMoves)),k=Object(j.a)(x,2),h=(k[0],k[1],i.find((function(e){return e.id===m})));return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null,l.a.createElement(I,{onClick:function(){return r(a.Teams)}},"Back"),l.a.createElement(R,null,h.name),h.pokemon.length<6?l.a.createElement(I,{onClick:function(){return r(a.SearchPokemon)}},"Add new Pokemon"):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{style:{marginBottom:"20px"}},h.pokemon.length>0?h.pokemon.map((function(e){return l.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){d(e.index),r(a.EditPokemon)}},l.a.createElement(Q,{pokemon:e}))})):l.a.createElement("p",null,"This team has no Pokemon!"))))};function X(){var e=Object(s.a)(["\n\tdisplay: flex;\n\tborder-bottom: solid 1px #ddd;\n\theight: 90px;\n\n\tbutton {\n\t\tmargin: auto 25px;\n\t}\n\n\tul {\n\t\tdisplay: flex;\n\t\tlist-style: none;\n\n\t\tli {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tpadding: 5px 10px;\n\t\t\tborder-left: solid #ccc 1px;\n\t\t\tcursor: pointer;\n\n\t\t\t&:nth-last-of-type(1) {\n\t\t\t\tborder-right: solid #ccc 1px;\n\t\t\t\twidth: 85px;\n\n\t\t\t\ti {\n\t\t\t\t\tmargin: auto;\n\t\t\t\t\ttransform: scale(1.1);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\timg {\n\t\t\t\tmargin: auto;\n\t\t\t\twidth: 50px;\n\t\t\t}\n\n\t\t\tp {\n\t\t\t\ttext-transform: capitalize;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t}\n\t}\n"]);return X=function(){return e},e}var Z=b.b.nav(X()),$=function(e){var t=Object(f.useRecoilState)(v.currentView),n=Object(j.a)(t,2),r=(n[0],n[1]),c=Object(f.useRecoilState)(v.teams),o=Object(j.a)(c,2),i=o[0],u=(o[1],Object(f.useRecoilState)(v.currentTeamID)),s=Object(j.a)(u,2),m=s[0],p=(s[1],Object(f.useRecoilState)(v.currentPokemonIndex)),b=Object(j.a)(p,2),d=(b[0],b[1]),O=Object(f.useRecoilState)(v.allPokemon),g=Object(j.a)(O,2),x=g[0],k=(g[1],Object(f.useRecoilState)(v.allMoves)),h=Object(j.a)(k,2),E=(h[0],h[1],Object(f.useRecoilState)(v.currentViewSecondary)),S=Object(j.a)(E,2),y=(S[0],S[1],i.find((function(e){return e.id===m})));return l.a.createElement(Z,null,e.children,l.a.createElement("ul",null,y.pokemon.map((function(e){var t=x.get(e.name);return l.a.createElement("li",{key:e.index,onClick:function(){d(e.index),r(a.EditPokemon)}},l.a.createElement("img",{src:t.sprite,alt:e.name}),l.a.createElement("p",null,e.name))})),y.pokemon.length<6?l.a.createElement("li",{onClick:function(){r(a.SearchPokemon)}},l.a.createElement("i",{className:"fa fa-plus"})):l.a.createElement(l.a.Fragment,null)))},ee=n(12),te=function(e,t){return{name:e.name,index:t,moves:[],nickname:null,item:null,ability:{uglyName:e.abilities[0]},level:100,gender:"male",nature:"serious",shiny:!1,evs:[{stat:"hp",value:0},{stat:"attack",value:0},{stat:"defense",value:0},{stat:"specialAttack",value:0},{stat:"specialDefense",value:0},{stat:"speed",value:0}],ivs:[{stat:"hp",value:31},{stat:"attack",value:31},{stat:"defense",value:31},{stat:"specialAttack",value:31},{stat:"specialDefense",value:31},{stat:"speed",value:31}]}};function ne(){var e=Object(s.a)(["\n\tdisplay: flex;\n\tpadding: 10px;\n\tborder: solid 1px #ddd;\n\tcursor: pointer;\n\n\timg {\n\t\twidth: 70px;\n\t\tmargin: auto 0;\n\t}\n\n\tp {\n\t\ttext-transform: capitalize;\n\t\tmargin: auto 0 auto 15px;\n\t}\n"]);return ne=function(){return e},e}var ae=b.b.div(ne()),re=function(e){var t=Object(f.useRecoilState)(v.currentView),n=Object(j.a)(t,2),r=(n[0],n[1]),c=Object(f.useRecoilState)(v.teams),o=Object(j.a)(c,2),i=o[0],u=o[1],s=Object(f.useRecoilState)(v.currentTeamID),m=Object(j.a)(s,2),p=m[0],b=(m[1],Object(f.useRecoilState)(v.currentPokemonIndex)),d=Object(j.a)(b,2),O=(d[0],d[1]),g=Object(f.useRecoilState)(v.allPokemon),x=Object(j.a)(g,2),k=(x[0],x[1],Object(f.useRecoilState)(v.allMoves)),h=Object(j.a)(k,2),E=(h[0],h[1],i.find((function(e){return e.id===p}))),S=e.pokemon;return l.a.createElement(ae,{key:S.id,onClick:function(){var e;e=Object(ee.a)(Object(ee.a)({},E),{},{pokemon:[].concat(Object(U.a)(E.pokemon),[te(S,E.pokemon.length)])}),u((function(t){var n=t.map((function(t){return t.id===e.id?e:t}));return localStorage.setItem("teams",JSON.stringify(n)),n})),O(E.pokemon.length),r(a.EditPokemon)}},l.a.createElement("img",{src:S.sprite,alt:S.name}),l.a.createElement("p",null,S.name))},ce=function(e){var t=Object(f.useRecoilState)(v.currentView),n=Object(j.a)(t,2),r=(n[0],n[1]),c=Object(f.useRecoilState)(v.teams),i=Object(j.a)(c,2),u=i[0],s=(i[1],Object(f.useRecoilState)(v.currentTeamID)),m=Object(j.a)(s,2),p=m[0],b=(m[1],Object(f.useRecoilState)(v.currentPokemonIndex)),d=Object(j.a)(b,2),O=(d[0],d[1],Object(f.useRecoilState)(v.allPokemon)),g=Object(j.a)(O,2),x=g[0],k=(g[1],Object(f.useRecoilState)(v.allMoves)),h=Object(j.a)(k,2),E=(h[0],h[1],Object(o.useState)("")),S=Object(j.a)(E,2),y=S[0],w=S[1];u.find((function(e){return e.id===p}));return l.a.createElement(l.a.Fragment,null,l.a.createElement($,null,l.a.createElement(I,{onClick:function(){return r(a.Team)}},"Back")),l.a.createElement(N,{type:"text",placeholder:"Search for a Pokemon",onChange:function(e){w(e.target.value)}}),l.a.createElement("div",{style:{height:"600px",overflow:"scroll"}},Array.from(x.entries()).map((function(e){var t=Object(j.a)(e,2),n=(t[0],t[1]);return n.name.includes(y.toLowerCase())?l.a.createElement(re,{pokemon:n,key:n.id}):l.a.createElement(l.a.Fragment,null)}))))},oe=function(e){var t=Object(f.useRecoilState)(v.currentView),n=Object(j.a)(t,2),a=(n[0],n[1],Object(f.useRecoilState)(v.teams)),r=Object(j.a)(a,2),c=r[0],o=(r[1],Object(f.useRecoilState)(v.currentTeamID)),i=Object(j.a)(o,2),u=i[0],s=(i[1],Object(f.useRecoilState)(v.currentPokemonIndex)),m=Object(j.a)(s,2),p=(m[0],m[1],Object(f.useRecoilState)(v.allPokemon)),b=Object(j.a)(p,2),d=b[0],O=(b[1],Object(f.useRecoilState)(v.allMoves)),g=Object(j.a)(O,2),x=(g[0],g[1],Object(f.useRecoilState)(v.editPokemonInput)),k=Object(j.a)(x,2),h=k[0];k[1],c.find((function(e){return e.id===u}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{height:"395px",overflow:"scroll"}},Array.from(d.entries()).map((function(e){var t=Object(j.a)(e,2),n=(t[0],t[1]);return n.name.includes(h.toLowerCase())?l.a.createElement(re,{pokemon:n,key:n.id}):l.a.createElement(l.a.Fragment,null)}))))};function le(){var e=Object(s.a)(["\n\tdisplay: flex;\n\tpadding: 10px;\n\tborder: solid 1px #ddd;\n\tcursor: pointer;\n\n\timg {\n\t\twidth: 70px;\n\t\tmargin: auto 0;\n\t}\n\n\tp {\n\t\ttext-transform: capitalize;\n\t\tmargin: auto 0 auto 15px;\n\t}\n"]);return le=function(){return e},e}var ie=b.b.div(le()),ue=function(e){var t=e.move;return l.a.createElement(ie,{key:t.uglyName},l.a.createElement("p",null,t.prettyName))},se=function(e){var t=Object(f.useRecoilState)(v.currentView),n=Object(j.a)(t,2),a=(n[0],n[1],Object(f.useRecoilState)(v.teams)),c=Object(j.a)(a,2),o=c[0],i=c[1],u=Object(f.useRecoilState)(v.currentTeamID),s=Object(j.a)(u,2),m=s[0],p=(s[1],Object(f.useRecoilState)(v.currentPokemonIndex)),b=Object(j.a)(p,2),d=b[0],O=(b[1],Object(f.useRecoilState)(v.allPokemon)),g=Object(j.a)(O,2),x=g[0],k=(g[1],Object(f.useRecoilState)(v.allMoves)),h=Object(j.a)(k,2),E=h[0],S=(h[1],Object(f.useRecoilState)(v.editPokemonInput)),y=Object(j.a)(S,2),w=y[0],R=(y[1],Object(f.useRecoilState)(v.currentMoveIndex)),P=Object(j.a)(R,2),I=P[0],M=(P[1],Object(f.useRecoilState)(v.currentViewSecondary)),N=Object(j.a)(M,2),T=(N[0],N[1]),C=o.find((function(e){return e.id===m})).pokemon.find((function(e){return e.index===d})),F=x.size>0?x.get(C.name).moveset:[];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{height:"395px",overflow:"scroll"}},F.map((function(e){var t=E.get(e);return t.prettyName.toLowerCase().includes(w.toLowerCase())?l.a.createElement("div",{onClick:function(){var t,n=Object(U.a)(C.moves);n[I]={name:e},console.log(Object(ee.a)(Object(ee.a)({},C),{},{moves:C.moves.map((function(e,t){return t!==I?e:{name:e.name}}))})),t=Object(ee.a)(Object(ee.a)({},C),{},{moves:n}),i((function(e){var n=e.map((function(e){return e.id===m?Object(ee.a)(Object(ee.a)({},e),{},{pokemon:e.pokemon.map((function(e){return e.index===d?t:e}))}):e}));return localStorage.setItem("teams",JSON.stringify(n)),n})),T(r.Nothing)}},l.a.createElement(ue,{move:t})):l.a.createElement(l.a.Fragment,null)}))))},me=function(e){var t=Object(f.useRecoilState)(v.currentView),n=Object(j.a)(t,2),c=(n[0],n[1]),o=Object(f.useRecoilState)(v.teams),i=Object(j.a)(o,2),u=i[0],s=(i[1],Object(f.useRecoilState)(v.currentTeamID)),m=Object(j.a)(s,2),p=m[0],b=(m[1],Object(f.useRecoilState)(v.currentPokemonIndex)),d=Object(j.a)(b,2),O=d[0],g=(d[1],Object(f.useRecoilState)(v.allPokemon)),x=Object(j.a)(g,2),k=(x[0],x[1],Object(f.useRecoilState)(v.allMoves)),h=Object(j.a)(k,2),E=(h[0],h[1],Object(f.useRecoilState)(v.currentViewSecondary)),S=Object(j.a)(E,2),y=S[0],w=(S[1],u.find((function(e){return e.id===p})).pokemon.find((function(e){return e.index===O})));return l.a.createElement(l.a.Fragment,null,l.a.createElement($,null,l.a.createElement(I,{onClick:function(){return c(a.Team)}},"Back")),l.a.createElement(Q,{pokemon:w}),function(){switch(y){case r.Nothing:return l.a.createElement("p",{style:{margin:"10px"}},"Click a text field to edit the Pokemon!");case r.Moves:return l.a.createElement(se,null);case r.Pokemon:return l.a.createElement(oe,null);case r.Stats:return 3;case r.Items:return 4;case r.Abilities:return 5;case r.Misc:return 6;default:return l.a.createElement("h1",null,"Error: Unhandled Secondary View")}}())},pe=function(e){var t=Object(f.useRecoilState)(v.currentView),n=Object(j.a)(t,2),r=n[0],c=(n[1],Object(f.useRecoilState)(v.teams)),o=Object(j.a)(c,2),i=(o[0],o[1],Object(f.useRecoilState)(v.currentTeamID)),u=Object(j.a)(i,2),s=(u[0],u[1],Object(f.useRecoilState)(v.currentPokemonIndex)),m=Object(j.a)(s,2),p=(m[0],m[1],Object(f.useRecoilState)(v.allPokemon)),b=Object(j.a)(p,2),d=(b[0],b[1],Object(f.useRecoilState)(v.allMoves)),O=Object(j.a)(d,2),g=(O[0],O[1],Object(f.useRecoilState)(v.allItems)),x=Object(j.a)(g,2),k=(x[0],x[1],Object(f.useRecoilState)(v.allAbilities)),h=Object(j.a)(k,2);h[0],h[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null),l.a.createElement(w,null,l.a.createElement(J,null),l.a.createElement("div",null,function(){switch(r){case a.Teams:return l.a.createElement(q,null);case a.Team:return l.a.createElement(W,null);case a.EditPokemon:return l.a.createElement(me,null);case a.SearchPokemon:return l.a.createElement(ce,null);default:return l.a.createElement("h1",null,"Error: Unhandled Primary View")}}())))},be=function(e){var t=Object(f.useRecoilState)(v.teams),n=Object(j.a)(t,2),a=n[0],r=(n[1],Object(o.useState)(a.map((function(e){return e.id})).reduce((function(e,t){return t>e?t:e}),0))),c=Object(j.a)(r,2),i=c[0],u=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null),l.a.createElement(w,null,l.a.createElement(J,null),l.a.createElement("div",null,l.a.createElement(P,null,l.a.createElement(M,{to:"/"},l.a.createElement(I,null,"Back")),l.a.createElement("p",null,"(Battle isn't functional yet! Project shown is front end only so far)"),a.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement(R,null,"Pick a team"),l.a.createElement(I,null,"Search for games"),a.length>1?l.a.createElement(T,{marginless:!0,onChange:function(e){return u(Number.parseInt(e.target.value))}},a.map((function(e){return l.a.createElement("option",{value:e.id},e.name)}))):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{style:{marginTop:"15px"}},l.a.createElement(Y,{team:a.find((function(e){return e.id===i}))}))):l.a.createElement(l.a.Fragment,null,l.a.createElement(R,null,"You have no teams!"),l.a.createElement(M,{to:"/teambuilder"},l.a.createElement(I,null,"Make some here!")))))))},fe=n(3),de=n.n(fe),Oe=n(8),je=n(22),ve=n.n(je),ge=function(){var e=Object(Oe.a)(de.a.mark((function e(t){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(e){return{name:e.name,id:e.id,sprite:e.sprites.front_default,types:e.types.map((function(e){return e.type.name})),abilities:e.abilities.map((function(e){return e.ability.name})),index:null,moveset:e.moves.map((function(e){return e.move.name})),stats:e.stats.map((function(e){return{name:e.stat.name,base:e.base_stat}}))}},ke=function(){var e=Object(Oe.a)(de.a.mark((function e(t){var n;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge(t);case 2:return n=e.sent,e.abrupt("return",xe(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=Object(Oe.a)(de.a.mark((function e(t,n){var a,r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=[],r=t;r<=n;r++)a.push(ke(r));return e.next=4,Promise.all(a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(Oe.a)(de.a.mark((function e(t){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve.a.get("https://pokeapi.co/api/v2/move/".concat(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Se=function(e){return{prettyName:e.names[7].name,uglyName:e.name,type:e.type.name,damageClass:e.damage_class.name,accuracy:e.accuracy,pp:e.pp,description:e.flavor_text_entries[0].flavor_text,power:e.power}},ye=function(){var e=Object(Oe.a)(de.a.mark((function e(t){var n;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee(t);case 2:return n=e.sent,e.abrupt("return",Se(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(Oe.a)(de.a.mark((function e(t,n){var a,r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=[],r=t;r<=n;r++)a.push(ye(r));return e.next=4,Promise.all(a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Re=function(e){return{sprite:e.sprites.default,prettyName:e.names[5].name,uglyName:e.name,description:e.flavor_text_entries[0].text}},Pe=function(){var e=Object(Oe.a)(de.a.mark((function e(t){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve.a.get("https://pokeapi.co/api/v2/item/".concat(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(Oe.a)(de.a.mark((function e(t){var n;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe(t);case 2:return n=e.sent,e.abrupt("return",Re(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Me=function(){var e=Object(Oe.a)(de.a.mark((function e(t,n){var a,r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=[],r=t;r<=n;r++)a.push(Ie(r));return e.next=4,Promise.all(a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ne=function(e){return{prettyName:e.names[5].name,uglyName:e.name,description:e.flavor_text_entries[0].flavor_text}},Te=function(){var e=Object(Oe.a)(de.a.mark((function e(t){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve.a.get("https://pokeapi.co/api/v2/ability/".concat(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(Oe.a)(de.a.mark((function e(t){var n;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te(t);case 2:return n=e.sent,e.abrupt("return",Ne(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(Oe.a)(de.a.mark((function e(t,n){var a,r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=[],r=t;r<=n;r++)a.push(Ce(r));return e.next=4,Promise.all(a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ae=function(e){var t=Object(f.useRecoilState)(v.currentView),n=Object(j.a)(t,2),a=(n[0],n[1],Object(f.useRecoilState)(v.teams)),r=Object(j.a)(a,2),c=(r[0],r[1],Object(f.useRecoilState)(v.currentTeamID)),i=Object(j.a)(c,2),u=(i[0],i[1],Object(f.useRecoilState)(v.currentPokemonIndex)),s=Object(j.a)(u,2),m=(s[0],s[1],Object(f.useRecoilState)(v.allPokemon)),p=Object(j.a)(m,2),b=p[0],d=p[1],O=Object(f.useRecoilState)(v.allMoves),g=Object(j.a)(O,2),x=g[0],k=g[1],h=Object(f.useRecoilState)(v.allItems),E=Object(j.a)(h,2),S=E[0],y=E[1],w=Object(f.useRecoilState)(v.allAbilities),R=Object(j.a)(w,2),P=R[0],I=R[1];return Object(o.useEffect)((function(){if(0===b.size){var e=function(){var t=Object(Oe.a)(de.a.mark((function t(){var n;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("Fetching Pokemon"),n=new Map,t.next=5,he(1,100);case 5:t.sent.forEach((function(e){return n.set(e.name,e)})),localStorage.setItem("allPokemon",JSON.stringify(Array.from(n.entries()))),d(n),console.log("Finished fetching Pokemon",n),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),setTimeout(1e3,e);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();e()}else console.log("Cached Pokemon",b)}),[]),Object(o.useEffect)((function(){if(0===x.size){var e=function(){var t=Object(Oe.a)(de.a.mark((function t(){var n,a;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("Fetching moves."),t.next=4,we(1,728);case 4:n=t.sent,a=new Map,n.forEach((function(e){return a.set(e.uglyName,e)})),localStorage.setItem("allMoves",JSON.stringify(Array.from(a.entries()))),k(a),console.log("Finished fetching moves",a),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),setTimeout(2e3,e);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();e()}else console.log("Cached Moves",x)}),[]),Object(o.useEffect)((function(){if(0===S.size){var e=function(){var t=Object(Oe.a)(de.a.mark((function t(){var n,a;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("Fetching items."),t.next=4,Me(1,50);case 4:n=t.sent,a=new Map,n.forEach((function(e){return a.set(e.uglyName,e)})),localStorage.setItem("allItems",JSON.stringify(Array.from(a.entries()))),y(a),console.log("Finished fetching items",a),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),setTimeout(4e3,e);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();e()}else console.log("Cached Items",S)}),[]),Object(o.useEffect)((function(){if(0===P.size){var e=function(){var t=Object(Oe.a)(de.a.mark((function t(){var n,a;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("Fetching abilities."),t.next=4,Fe(1,233);case 4:n=t.sent,a=new Map,n.forEach((function(e){return a.set(e.uglyName,e)})),localStorage.setItem("allAbilities",JSON.stringify(Array.from(a.entries()))),I(a),console.log("Finished fetching abilities",a),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),setTimeout(4e3,e);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();e()}else console.log("Cached Abilities",P)}),[]),l.a.createElement(l.a.Fragment,null)};function Ve(){var e=Object(s.a)(["\n\t:root {\n\t\t--bg-main: ",";\n\t\t--bg-secondary: linear-gradient(-135deg, #333, #444);\n\t}\n\n\t* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbox-sizing: border-box;\n\t\tfont-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t}\n"]);return Ve=function(){return e},e}p.a.connect("http://localhost:4000").emit("msg","hello world!");var De=Object(b.a)(Ve(),"linear-gradient(-135deg, #f45c43, #eb3349)"),Je=function(){return l.a.createElement(d.a,null,l.a.createElement(f.RecoilRoot,null,l.a.createElement(De,null),l.a.createElement(Ae,null),l.a.createElement(O.a,{exact:!0,path:"/",component:_}),l.a.createElement(O.a,{exact:!0,path:"/teambuilder",component:pe}),l.a.createElement(O.a,{exact:!0,path:"/battle",component:be})))};u.a.render(l.a.createElement(Je,null),document.getElementById("root"))},74:function(e,t,n){e.exports=n(149)}},[[74,1,2]]]);
//# sourceMappingURL=main.08efff54.chunk.js.map