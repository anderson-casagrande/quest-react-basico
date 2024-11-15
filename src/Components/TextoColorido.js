function TextoColorido (props) {
    const maiusculo = props.text.toUpperCase();
    
    return (
      <div style={{color: props.color}}>
        {maiusculo}
      </div>  
    )
}
export default TextoColorido