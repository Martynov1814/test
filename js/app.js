
const product = (name, vendor_code, series, price) => ({name, vendor_code, series, price});

const products = [
  product('Яблоки', '457863500', 'Фрукты', '330 р.'),
  product('Хлеб', '457868312', 'Мучное', '24 р.'),
  product('Лампочка', '457789158', 'Элементы освещения', '50 р.'),
  product('Помидоры', '457863312', 'Овощи', '150 р.'),
  product('Конфеты', '456159832', 'Кондитерка', '47 р.')
]


var app = new Vue({
    el: '#app',
    data: {
      products: products,
      selectedProductIndex: null,
      settingWindowVisibity: false
    },
    methods: {
      openSetWindow: function(index) {
        this.selectedProductIndex = index
      }
    },
    computed: {
      changeBtnText() {
        return this.settingWindowVisibity ? 'Скрыть редактор' : 'Открыть редактор'
      }
    }
});