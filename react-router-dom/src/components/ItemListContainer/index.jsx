const ItemListContainer = () => {
    const [producto, setProducto] = useState ({});
    const {id} = useParams();

    useEffect (() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setProducto(data);
        })
    }, [id]);
  return (
    <div>ItemListContainer</div>
  )
}

export default ItemListContainer