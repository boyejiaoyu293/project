import Vue from 'vue'
// 公用头部
import mokuai from './mokuai'

const mokuais = {
    install: () => {
        Vue.component('mokuais',mokuai)
    }
}
export { 
	mokuais
}