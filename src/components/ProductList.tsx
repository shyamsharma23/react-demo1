import axios from "axios";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Display from "./Display";

interface Category {
  id: Number;
}

interface Product {
  name: String;
  description: String;
  category: Category;
}

const ProductList = () => {
  const [value, setValue] = useState<any>([]);
  const nameRef = useRef<any>();
  const descRef = useRef<any>();
  const url = "http://localhost:3000/api/v1/products";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(value);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(nameRef.current.value);
    console.log(descRef.current.value);

    const cat: Category = {
      id: 1,
    };

    let obj: Product = {
      name: nameRef.current.value,
      description: descRef.current.value,
      category: cat,
    };

    axios.post("http://localhost:3000/api/v1/product/create", obj);
  };

  return (
    <div>
      <form action="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Name of Product</label>
        <input type="text" id="name" ref={nameRef} />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" ref={descRef} />
        <button className="btn btn-primary">Create</button>
      </form>
      <p>Product List</p>
      {value.map((item: any) => (
        <Display value={item} />
      ))}
    </div>
  );
};

export default ProductList;
