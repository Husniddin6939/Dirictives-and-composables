import { type Directive} from 'vue';

export const focusElement:Directive={
    updated(el:HTMLElement, bind:any) {
        if(bind.value){
            el.style.display='block'
        }else{
            el.style.display='none'
        }
        
    },
}
