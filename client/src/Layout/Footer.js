import { useState, useEffect } from "react";
import Axios from "axios";

function Footer() {

  return (

    <footer class="footer" style={{backgroundcolor: '#ebeef4'}} >
    <div class="footer-middle">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="f-about single-footer">
                        <div class="logo">
                            <a href="index.html"><img src="/assets/images/odf.png" alt="Logo"/></a>
                        </div>
                        <p>Nemo enim enim voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequ magni dolores eos qui ratione.</p>
                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-footer sm-custom-border f-link">
                        <h3>our Reference</h3>
                        <ul>
                          
                            <li><a href="javascript:void(0)">Minstere de la formation prof</a></li>
                            <li><a href="javascript:void(0)">Ministere de la culture</a></li>
                            <li><a href="javascript:void(0)">BIAT et b@labs</a></li>
                            <li><a href="javascript:void(0)">WORLD BANK</a></li>
                            <li><a href="javascript:void(0)">BADEA</a></li>
                        </ul>
                       
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">

                    <div class="single-footer sm-custom-border f-link">
                        <br></br>
                        <br></br>

                        <ul>
                           <li><a href="javascript:void(0)">Ministere des tic</a></li>
                            <li><a href="javascript:void(0)">EU et Innovi</a></li>
                            <li><a href="javascript:void(0)">KAS</a></li>
                            <li><a href="javascript:void(0)">GIZ</a></li>
                            <li><a href="javascript:void(0)">ENDA Tamweel</a></li> 
                        </ul>
                       
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-footer sm-custom-border f-link">
                        <h3>Innovation ecosystems practice</h3>
                        <ul>

                            <li><a href="javascript:void(0)">incubation programs</a></li>
                            <li><a href="javascript:void(0)">acceleration programs</a></li>
                            <li><a href="javascript:void(0)">early finance ecosystems building</a></li>
                            <li><a href="javascript:void(0)">research valorization through IP value chain</a></li>
                            <li><a href="javascript:void(0)">Transition to industry 4.0</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  
    <div class="footer-bottom">
        <div class="container">
            <div class="inner">
                <div class="row">
                    <div class="col-12">
                        <div class="left">
                            <p>Designed and Developed by ODF</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer;
