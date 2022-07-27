import { useState } from "react"

export const AddCategory = ( {onAddCategory} ) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChage = ({ target }) => {
        setinputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;

        // onAddCategory(categories => [ inputValue, ...categories]);
        setinputValue('');
        onAddCategory( inputValue.trim() );
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange= { onInputChage }
        />
    </form>
  )
}
