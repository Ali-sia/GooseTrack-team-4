"use strict";(self.webpackChunkgoose_track_team_4=self.webpackChunkgoose_track_team_4||[]).push([[268],{9268:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,o,i,u,a,c,l,d,s=t(9365),f=t(3629),h=t(4565),m=t(1951),p=t(4690),x=t(168),g=t(6444),v=t(131),b=t(1087),w=g.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ","px;\n\n  min-height: 74px;\n  max-width: 336px;\n\n  border-radius: ",";\n  border: ",";\n\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.12;\n\n  background-color: ",";\n  color: ",";\n\n  ","\n  ","\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.light}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.taskBorderTheme)}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.colors.bgcSecondaryTheme}),(function(n){return n.theme.colors.textDaysNameAtDaysPage}),(0,v.tS)("tablet","\n   min-height: 68px;\n   max-width: 704px;\n   font-size: 14px;\n"),(0,v.tS)("laptop","\n  max-width: 1087px;\n")),y=g.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n"]))),k=g.ZP.span(i||(i=(0,x.Z)(["\n  display: none;\n\n  ","\n"])),(0,v.tS)("tablet","\n   display: block;\n   gap:8px;\n")),Z=g.ZP.span(u||(u=(0,x.Z)(["\n  display: block;\n\n  ","\n"])),(0,v.tS)("tablet","display: none;")),j=(0,g.ZP)(b.rU)(a||(a=(0,x.Z)(["\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 20px;\n  height: 22px;\n\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1;\n\n  border-radius: 6px;\n  border: none;\n  color: ",";\n\n  background-color: ",";\n\n  &:hover {\n    outline: ",";\n  }\n\n  ",";\n\n  ","\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.xs}),(function(n){return"true"===n.iscurrentday?n.theme.colors.white:n.theme.colors.calendarDayNumbers}),(function(n){return"true"===n.iscurrentday?n.theme.colors.primary:n.theme.colors.bgcSecondaryTheme}),(function(n){return"".concat(n.theme.borders.medium," ").concat(n.theme.colors.calendarDayNumbers)}),(function(n){return"true"===n.isselectedday&&"outline: ".concat(n.theme.borders.normal," ").concat(n.theme.colors.calendarDayNumbers)}),(0,v.tS)("tablet","\n  width: 26px;\n  height: 26px;\n  font-size: 16px;\n  border-radius: 8px;\n")),S=t(7689),D=t(184);function T(){var n=(0,S.bx)(),e=n.currentDate,t=n.activeDate,r=n.changeActiveDay,o=(0,s.Z)({start:(0,f.default)(t),end:(0,h.default)(t)}),i=function(n){return(0,m.default)(n,"eeeee").toUpperCase()},u=function(n){return(0,m.default)(n,"eee").toUpperCase()},a=function(n){return(0,m.default)(n,"d")},c=function(n){return(0,p.default)(e,n)},l=function(n){return(0,p.default)(t,n)},d=(0,m.default)(t,"ddMMMMyyyy");return(0,D.jsx)(w,{children:o.map((function(n){return(0,D.jsxs)(y,{children:[(0,D.jsx)(Z,{children:i(n)}),(0,D.jsx)(k,{children:u(n)}),(0,D.jsx)(j,{iscurrentday:c(n).toString(),isselectedday:l(n).toString(),onClick:function(){return r(0,n)},to:"/calendar/day/".concat(d),children:a(n)})]},u(n))}))})}var z=g.ZP.div(c||(c=(0,x.Z)(["\noverflow: hidden;\n"]))),P=g.ZP.div(l||(l=(0,x.Z)(["\n  overflow-x: scroll;\n  width: 336px;\n  ","\n  ","\n\n"])),(0,v.tS)("tablet","\n   width: 704px;\n"),(0,v.tS)("laptop","\n  width: 1087px;\n")),O=g.ZP.div(d||(d=(0,x.Z)(["\n  display: flex;\n  gap: 22px;\n  margin-bottom: ","px;\n  width: fit-content;\n\n"])),(function(n){return n.theme.space[4]}));t(2791);var N,C,M,A=t.p+"static/media/AddTaskIcon.9e22aa38c13e3ad33687f8fbdc2dd890.svg",_=g.ZP.button(N||(N=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: ","px;\n\n  border: ",";\n  border-radius: ",";\n\n  background-color: ",";\n  box-shadow: ",";\n\n  cursor: pointer;\n\n  font-weight: ",";\n  font-size: ",";\n\n  color: ",";\n\n  img {\n    margin-right: ","px;\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.borders.addTaskBTN}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.btnMain}),(function(n){return n.theme.shadows.loginBtn}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.space[4]-1})),B=function(n){n.taskGroupId;var e=n.openModal;return(0,D.jsxs)(_,{onClick:e,children:[(0,D.jsx)("img",{src:A,alt:"+"}),(0,D.jsx)("span",{children:" Add task "})]})},H=g.ZP.div(C||(C=(0,x.Z)(["\n  display: flex;\n  align-items: center;\njustify-content: space-between;\n\n\n  /* margin-bottom: ","px;\n\n  min-height: 174px;\n  width: 336px;\n\n  border-radius: ",";\n  border: ",";\n\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.12;\n\n  background-color: ",";\n  color: ","; */\n\n  /* ","\n  "," */\n// "])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.light}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.taskBorderTheme)}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.colors.bgcSecondaryTheme}),(function(n){return n.theme.colors.textDaysNameAtDaysPage}),(0,v.tS)("tablet","\n   min-height: 68px;\n   max-width: 704px;\n   font-size: 14px;\n"),(0,v.tS)("laptop","\n  max-width: 1087px;\n"));function W(){var n=(0,S.bx)().toggleModal;return(0,D.jsxs)(H,{children:[(0,D.jsx)("h2",{children:"ToDo"}),(0,D.jsx)("button",{type:"button",onClick:function(){return n()},children:"+"})]})}function E(){return(0,D.jsx)("div",{})}function I(){return(0,D.jsx)("div",{children:(0,D.jsx)(E,{})})}var R=g.ZP.div(M||(M=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  /* align-items: center; */\n  /* margin-bottom: ","px; */\n  padding: 25px 18px 20px 18px;\n\n  min-height: 155px;\n  width: 336px;\n\n  border-radius: ",";\n  border: ",";\n\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.12;\n\n  background-color: ",";\n  color: ",";\n\n  /* ","\n  "," */\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.light}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.taskBorderTheme)}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.colors.bgcSecondaryTheme}),(function(n){return n.theme.colors.textDaysNameAtDaysPage}),(0,v.tS)("tablet","\n   min-height: 68px;\n   width: 704px;\n   font-size: 14px;\n"),(0,v.tS)("laptop","\n  width: 1087px;\n"));function U(){return(0,D.jsxs)(R,{children:[(0,D.jsx)(W,{title:[{title:"To do",number:1},{title:"In progress",number:2},{title:"Done",number:3}].title}),{}&&(0,D.jsx)(I,{}),(0,D.jsx)(B,{})]})}function F(){return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(z,{children:[(0,D.jsx)(T,{}),(0,D.jsx)(P,{children:(0,D.jsxs)(O,{children:[(0,D.jsx)(U,{}),(0,D.jsx)(U,{}),(0,D.jsx)(U,{})]})})]})})}},131:function(n,e,t){t.d(e,{Yk:function(){return f},tS:function(){return s},vX:function(){return d}});var r,o,i,u,a=t(168),c=t(6444),l={mobile:375,tablet:768,laptop:1440},d=(Object.keys(l).reduce((function(n,e){return n[e]=function(){return(0,c.iv)(r||(r=(0,a.Z)(["\n    @media (min-width: ","px) {\n      ","\n    }\n  "])),l[e],c.iv.apply(void 0,arguments))},n}),{}),function(n,e,t){return(0,c.iv)(o||(o=(0,a.Z)(["\n  @media (min-width: ","px) and (max-width: ","px) {\n    ","\n  }\n"])),l[n],l[e]-1,t)}),s=function(n,e){return(0,c.iv)(i||(i=(0,a.Z)(["\n  @media (min-width: ","px) {\n    ","\n  }\n"])),l[n],e)},f=function(n,e){return(0,c.iv)(u||(u=(0,a.Z)(["\n  @media (max-width: ","px) {\n    ","\n  }\n"])),l[n]-1,e)}},9365:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(8527),o=t(4522);function i(n,e){var t;(0,o.Z)(1,arguments);var i=n||{},u=(0,r.default)(i.start),a=(0,r.default)(i.end),c=a.getTime();if(!(u.getTime()<=c))throw new RangeError("Invalid interval");var l=[],d=u;d.setHours(0,0,0,0);var s=Number(null!==(t=null===e||void 0===e?void 0:e.step)&&void 0!==t?t:1);if(s<1||isNaN(s))throw new RangeError("`options.step` must be a number greater than 1");for(;d.getTime()<=c;)l.push((0,r.default)(d)),d.setDate(d.getDate()+s),d.setHours(0,0,0,0);return l}},4565:function(n,e,t){t.r(e),t.d(e,{default:function(){return a}});var r=t(4408),o=t(8527),i=t(9297),u=t(4522);function a(n,e){var t,a,c,l,d,s,f,h;(0,u.Z)(1,arguments);var m=(0,r.j)(),p=(0,i.Z)(null!==(t=null!==(a=null!==(c=null!==(l=null===e||void 0===e?void 0:e.weekStartsOn)&&void 0!==l?l:null===e||void 0===e||null===(d=e.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==c?c:m.weekStartsOn)&&void 0!==a?a:null===(f=m.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==t?t:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var x=(0,o.default)(n),g=x.getDay(),v=6+(g<p?-7:0)-(g-p);return x.setDate(x.getDate()+v),x.setHours(23,59,59,999),x}},4690:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var r=t(8347),o=t(4522);function i(n,e){(0,o.Z)(2,arguments);var t=(0,r.default)(n),i=(0,r.default)(e);return t.getTime()===i.getTime()}},8347:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var r=t(8527),o=t(4522);function i(n){(0,o.Z)(1,arguments);var e=(0,r.default)(n);return e.setHours(0,0,0,0),e}},3629:function(n,e,t){t.r(e),t.d(e,{default:function(){return a}});var r=t(8527),o=t(9297),i=t(4522),u=t(4408);function a(n,e){var t,a,c,l,d,s,f,h;(0,i.Z)(1,arguments);var m=(0,u.j)(),p=(0,o.Z)(null!==(t=null!==(a=null!==(c=null!==(l=null===e||void 0===e?void 0:e.weekStartsOn)&&void 0!==l?l:null===e||void 0===e||null===(d=e.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==c?c:m.weekStartsOn)&&void 0!==a?a:null===(f=m.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==t?t:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var x=(0,r.default)(n),g=x.getDay(),v=(g<p?7:0)+g-p;return x.setDate(x.getDate()-v),x.setHours(0,0,0,0),x}}}]);
//# sourceMappingURL=268.f6d8a14f.chunk.js.map