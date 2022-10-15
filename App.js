import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function App() {
  // Definir los datos del formulario que se validara
  const {control, handleSubmit, formState: {errors}} = useForm({
    defaultValues:{fullname:'', email:'', password:'', salary:'', numtel:''}
  })
  // definir el metodp para mostrar los datos cuando sean validos
  const onSubmit = data => console.log();
  return (
    <View style={styles.container}>
      <Controller control={control} rules={{required:true, pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g, maxLength:30, minLength:3 }}
      render={({field:{onChange, onBlur, value}})=>(<TextInput style={[styles.inputs,{borderColor: errors.fullname?.type == "required" || errors.fullname?.type == "pattern"  || errors.fullname?.type == "maxLenght" || errors.fullname?.type == "mainLenght" }]}placeholder= "Nombre completo" onChange={onChange} onBlur={onBlur} value={value}/>)}
      name = "fullname"
      />
      {errors.fullname?.type =="required" && <Text style={{color:'red'}}>El nombre es obligatorio</Text>}
      {errors.fullname?.type =="maxLength" && <Text style={{color:'red'}}>El nombre no puede exceder 30 caracteres</Text>}
      {errors.fullname?.type =="mainLength" && <Text style={{color:'red'}}>El nombre minimo 3 caracteres</Text>}
      {errors.fullname?.type =="pattern" && <Text style={{color:'red'}}>El nombre solo con letras y espacios</Text>}

      <Controller control={control} rules={{required:true, pattern:/^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,3}(,\d{3})*(\.\d+)?$/}}
      render={({field:{onChange, onBlur, value}})=>(<TextInput style={[styles.inputs,{borderColor: errors.email?.type == "required" || errors.email?.type == "pattern"  || errors.email?.type == "maxLenght" || errors.email?.type == "mainLenght" }]}
      placeholder= "Correo electronico" 
      onChange={onChange} 
      onBlur={onBlur} value={value}/>)}
      name = "email"
      />

      {errors.email?.type =="required" && <Text style={{color:'red'}}>El Correo es obligatorio</Text>}
      {errors.email?.type =="pattern" && <Text style={{color:'red'}}>El Correo no es valido</Text>}


      <Controller control={control} rules={{required:true, pattern:/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/}}
      render={({field:{onChange, onBlur, value}})=>(<TextInput style={[styles.inputs,{borderColor: errors.password?.type == "required" || errors.password?.type == "pattern"  || errors.password?.type == "maxLenght" || errors.password?.type == "mainLenght" }]}
      placeholder= "Contraseña" 
      onChange={onChange} 
      onBlur={onBlur} value={value}/>)}
      name = "password"
      />


      {errors.password?.type =="required" && <Text style={{color:'red'}}>la Contraseña es obligatorio</Text>}
      {errors.password?.type =="pattern" && <Text style={{color:'red'}}>la contraseña debe de tener , mayusculas, caracteres espaciales</Text>}

      

      <Controller control={control} rules={{required:true, pattern:/^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,3}(,\d{3})*(\.\d+)?$/}}
      render={({field:{onChange, onBlur, value}})=>(<TextInput style={[styles.inputs,{borderColor: errors.salary?.type == "required" || errors.salary?.type == "pattern"  || errors.salary?.type == "maxLenght" || errors.salary?.type == "mainLenght" }]}
      placeholder= "Salario" 
      onChange={onChange} 
      onBlur={onBlur} value={value}/>)}
      name = "salary"
      />


      {errors.salary?.type =="required" && <Text style={{color:'red'}}>el Salario es obligatorio</Text>}
      {errors.salary?.type =="pattern" && <Text style={{color:'red'}}>la contraseña debe de tener , mayusculas, caracteres espaciales</Text>}


      


      <TouchableOpacity style={{backgroundColor: 'green', borderRadius:10, padding: 5, width:200}}
      onPress={handleSubmit(onSubmit)}>

      <Text style={{color: 'white', textAlign: 'center'}}>ENVIAR</Text>
      </TouchableOpacity>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputs:{
    padding:10,
    borderRadius:10,
    color:'black',
    marginBottom:5,
    borderWidth:1,
    borderColor:'green'
  }
});
