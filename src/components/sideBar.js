import React from 'react';
import { Link } from 'react-router-dom';
import Card from './card';
import Footer from './footer';
import SuggestionCours from './suggestionCours';
export default function SideBar() {
    
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
    {/* <!-- Container wrapper --> */}
        <div class="container-fluid bg-info">
            {/* <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            E-Learning
            </button> */}

            {/* <!-- Collapsible wrapper --> */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <span class="navbar-brand mb-0 h1"><i class="fas fa-brain"></i>E-Learning</span>
            {/* <!-- Left links --> */}
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link" href="#">Cours</a>
                </li>
                <li class="nav-item bg-info">
                <a class="nav-link" href="#">Ventes</a>
                </li>
                <li class="nav-item bg-info">
                <a class="nav-link" href="#">Projects</a>
                </li>
            </ul>
            {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}

            {/* <!-- Right elements --> */}
            <div class="d-flex align-items-center">
            {/* <!-- Icon --> */}
            <a class="text-reset me-3" href="#">
                <i class="fas fa-shopping-cart"></i>
            </a>

            {/* <!-- Notifications --> */}
            <div class="">
                <a
                class="text-reset me-3  hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                >
                <i class="fas fa-bell"></i>
                <span class="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
            </div>
            {/* <!-- Avatar --> */}
            <div class="dropdown">
                <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                >
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    class="rounded-circle"
                    height="25"
                    alt="Black "
                    loading="lazy"
                />
                </a>
                <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
                >
                <li>
                    <a class="dropdown-item" href="#">My profile</a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                    <a class="dropdown-item" href="#"><i class="fas fa-power-off"></i>Logout</a>
                </li>
                </ul>
            </div>
            </div>
            
        </div>
        
    {/* <!-- Container wrapper --> */}
    </nav>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
        <form class="d-flex input-group w-auto">
            <input
                type="search"
                class="form-control rounded"
                placeholder="Rechercher un cours"
                aria-label="Search"
                aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
            </span>
        </form>
        <a class="navbar-brand"><Link to='insertCours'>Ajouter un cours</Link> </a>
    </div>
    </nav>
    
    <div class="mt-5">
        <Card /> 
    </div>
    <div>
        <SuggestionCours /> 
    </div>
    <Footer />
    </>
    
    
  )
}