'use client'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
//typescript
import * as Bootstrap from 'bootstrap';
import { useEffect } from 'react';
//this checkmark will remove item from cart
export default function RemoveBtn() {
    
    useEffect(() => {

        require("bootstrap/dist/js/bootstrap.bundle.min.js");

         //Convert NodeListOf<Element> to an array using Array.from() TS syntax
         const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        
         // Use the Bootstrap namespace for Tooltip
         const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new Bootstrap.Tooltip(tooltipTriggerEl));
    }, [])
    return (
        <button className="btn btn-danger" type='button' data-bs-toggle="tooltip" data-bs-title="Remove" data-bs-placement="bottom">
            <i className="bi bi-cart-dash"></i>
        </button>
    )
}