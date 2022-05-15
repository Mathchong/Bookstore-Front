import { useParams } from "react-router-dom";

export default function Category(){
    const {idCategory} = useParams();

    return (
        <h1>Esses são os seus livros da categoria {idCategory}</h1>
    );
}