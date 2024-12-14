import { reactive } from "vue";


export function useFetch(){
        const state=reactive({
            isPanding:true,
            isError:'',
            data: null,
        });

        async function useQuery<T>(URL: string): Promise<T | void> {
            try{
                const req=await fetch(URL);
                state.data=await req.json();
                state.isPanding=false;

                if(!req.ok){
                    state.isError="Error fetching data";
                    throw new Error(req.statusText);
                }

            } catch(err:any){
                console.log("first");
                state.isError=err.message
            }finally{
                console.log("Fetching....finished");
                
            }
        }


        return{
            state,
            useQuery
        }
} 