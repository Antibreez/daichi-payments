//Импорт библиотек
import 'jquery-ui-bundle'
import 'inputmask/dist/jquery.inputmask'
// import './select'
// import './modal'
// import './phone-input'
// import './JCSmartFilter'

//Импорт блоков
// import './nav'
// import './quality-tabs'
// import './about-brand-tabs'
// import './modal-partnership'
// import './series-slider'
// import './series-tabs'
// import './buy-tabs'
// import './select-region'
// import './perfect-scrollbar'
import './invoice-form'

//Импорт скриптов компонентов
function requireAll(r) {
  r.keys().forEach(r)
}
requireAll(require.context('../components/', true, /\.js$/))
