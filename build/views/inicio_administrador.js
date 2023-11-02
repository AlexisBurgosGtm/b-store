function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            <div class="row">
                                <div class="col-3">
                                    ${view.vista_menu()}
                                </div>
                                <div class="col-9">
                                    ${view.vista_tabla()}
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           
                            
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                </div>
               
            `
        },
        vista_menu:()=>{
            return `
            <hr class="solid">
                <button class="btn btn-circle hand btn-outline-primary">
                    <i class="fal fa-shoping-cart"></i>
                </button>  Productos y Precios
            
            <hr class="solid">
                <button class="btn btn-circle hand btn-outline-primary">
                    <i class="fal fa-shoping-cart"></i>
                </button>  Productos y Precios
            <hr class="solid">
            `
        },
        vista_tabla:()=>{
            return ``
        },
        vista_grafica:()=>{
            return ``
        },
    }

    root.innerHTML = view.body();

};


function addListeners(){



};

function initView(){

    getView();
    addListeners();

};