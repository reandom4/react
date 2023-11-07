
import {ICake} from "../../assets/types/cake.interface";
import styles from "./AddCakeForm.module.css"
import {useForm} from "react-hook-form";

function AddCakeForm({setCake}:{setCake: (newCakes: (prev: ICake[]) => ICake[]) => void}) {

    const {register,handleSubmit,reset} = useForm<ICake>({
        mode: 'onChange'
    })
    


    const createCake = (data:ICake) => {
            setCake((prev:ICake[]) => [
                {
                    id: prev.length + 1,
                    name: data.name,
                    price: data.price, // Преобразовать строку в число
                    image: data.image,
                },
                ...prev
            ]);
        reset()
    }
    return(
        <form className={styles.form} onSubmit={handleSubmit(createCake)}>
                <input placeholder='Name'
                       {...register('name',{required: 'Name is required'})}
                />
                <input placeholder='Price'
                       {...register('price',{required: 'Name is required'})}
                />
                <input placeholder='Image'
                       {...register('image',{required: 'Name is required'})}
                />
            <button>Create</button>
        </form>
    )
}
export default AddCakeForm