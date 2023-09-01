'use client'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect } from 'react'
//typescript
import * as Bootstrap from 'bootstrap';

//this cart will add item to cart, once done customer can check out
export default function OrderBtn() {
    useEffect(() => {

        require("bootstrap/dist/js/bootstrap.bundle.min.js");

         //Convert NodeListOf<Element> to an array using Array.from() TS syntax
         const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        
         // Use the Bootstrap namespace for Tooltip
         const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new Bootstrap.Tooltip(tooltipTriggerEl));
    }, [])

    return (
        
            <button className="btn btn-success" type='button' data-bs-toggle="tooltip" data-bs-title="Add to cart" data-bs-placement="bottom">
                <i className="bi bi-cart-check" ></i>
            </button>

    )
}