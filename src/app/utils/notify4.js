import noty from '@ppzp/noty'; // 引入默认配置（动画、内容）的通知
import '@ppzp/noty/content/index.css'; // 引入默认样式

// import Noty from '@ppzp/noty/noty.js';
// import Animation from '@ppzp/noty/animation/index.js';
// import Content from '@ppzp/noty/content/index.js';
// const noty = Noty({
//   Animation,
//   Content: {
//     success(title, subtitle, options = {}) {
//       const el = document.createElement('div');
//       el.innerHTML = `
//         <div class="title">${title}</div>
//         <div class="subtitle">${subtitle}</div>
//         <div class="close-btn">x</div>
//       `;
//       // 注意，下面是箭头函数，保留 this
//       el.querySelector('.close-btn').onclick = () => {
//         this.close();
//       };
//       options.onclick && el.addEventListener('click', options.onclick);
//       return el;
//     },
//     // error(...) { ... }
//   },
// });

export default noty;
