import { useEffect, useState } from 'react';
import { getAll } from '../api/categories';
import CategoryId from './CategoryId';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await getAll();
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCategories();
    }, []);
    return (
        <div className="categories">
            <h2>Categorie</h2>
            <div className="wrap-categories flex between flex-wrap">
                {categories.map((category) => (
                    <CategoryId key={category._id} data={category} />
                ))}
            </div>
        </div>
    );
};

export default Categories;
