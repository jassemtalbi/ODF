import React, { Component, useEffect, useRef } from 'react'  
import { saveMessage } from '../_actions/message_actions';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import  {useState  } from 'react'
import { ReactTinyLink } from 'react-tiny-link';
import Message from './Sections/Message';

  
function Chatbox() {
    
        var local=localStorage.getItem('Data');
        

    
    React.useEffect(() => {
        $("#chat-circle, #chat-box-toggle, #chat-popup").click(function(){
            $("#chat-box-body").toggleClass("show");
          });
    }, [])
        

        const dispatch = useDispatch();
        const messagesFromRedux = useSelector(state => state.message.messages);
        const [radioquiz,setradioquiz]= useState([]);
  const [radioquizP,setradioquizP]= useState([]);
  const [ModalIsOpen,setModalIsOpen]= useState(false);
  const [Notee,setNote]= useState(false);
  

    

        const textQuery= async (text)=>{

            let conversation = {
                who: "user",
                message: text
            }

            dispatch(saveMessage(conversation));
            console.log("text sent : "+ conversation.message);

            

            const textQueryVariables={
                "message":text,
	            
            }

            try{
                console.log(textQueryVariables);
                const response = await axios.post('http://localhost:5000/dialogflow/chatbot',textQueryVariables);
                console.log(response);
                const t=[];
                var content="";

                if(response.data.message.length>=2)
                {
	                response.data.message.map((v,k)=>{
		            if (v.message==="text")
		            {
		                content=response.data.message[0].text.text[0];
		            }
		            else if(v.message==="payload"){
			            response.data.message[1].payload.fields.richContent.listValue.values[0].listValue.values[0].structValue.fields.options.listValue.values.map((v,i)=>{ t.push(v.structValue.fields.text.stringValue)})
		            }
		            else   {
			            if(typeof v==='string')
			                {console.log("hhhhhhhh");t.push(v)
		                    }
			            else
			            {	
			                console.log("iiiiiiiiiiiiiiii");t.push(JSON.stringify(v))
			            }
		            }
	                })
                }


                else{
                    if(response.data.message[0].message==="payload")
	                {
		                response.data.message[0].payload.fields.richContent.listValue.values[0].listValue.values[0].structValue.fields.options.listValue.values.map((v,i)=>{ t.push(v.structValue.fields.text.stringValue)})
	                    console.log("TAAAAAAAAZZ");
	                }
	                else if (response.data.message[0].message==="text")   
	                {
                        content=response.data.message[0].text.text[0];console.log("TAAZZ");
                    }
	                else{
		                if( response.data.message.results==='object')
		                    {
                                response.data.message.results.map((v,i)=>{t.push(JSON.stringify(v))})
		                        console.log("YYYYYYYYYYY");
		                    }
		                else
		                    {	
			                    console.log("MMMMMMMM");
			                    t.push(response.data.message[0])	
		                    }
	                    }
                    }

                    console.log(response)
                    console.log("table: "+t)
                    console.log("content: "+content)
                    

                    let conversation={

                        who:"chatbot",
                        message:[content,t]
                    }

                    dispatch(saveMessage(conversation))
                    console.log("response chatbot:"+conversation.text)





            }
            catch(err){
                conversation =
	            {
	                "message": [
			            {
				            "platform": "PLATFORM_UNSPECIFIED",
				            "text": {
					            "text":"FAILLLED"
				            }
			            }
		            ]
	            }
            }


        }


        const calculernotequizP=(yb,radioquizP)=>
{	var note=0;
//console.log(JSON.parse(yoss[0]))
console.log("eeeeeeeeeeee");
console.log(radioquizP)
let quizzz=JSON.parse(yb[0])

let nomcategory=quizzz.category

yb.map((t,i)=>{
	//console.log(JSON.parse(t));
	let a=JSON.parse(t);
	//console.log(a)
	if(a.correct_answer===radioquizP[i]){
		//console.log(radioquizP[i]);
		//console.log(t.correct_answer);
		note =note+1;
	}
})
console.log(nomcategory)
note=note*100/20;
axios.post('/marks/addMark',{mark:note,type:"personality",category:nomcategory})
console.log(note);
textQuery("quizzes")
return note;

}

const calculernotequiz=(yoss,radioquiz)=>
{	var note=0;
	let quizzz=JSON.parse(yoss[0])
	console.log(yoss.length)
	let quizid=quizzz.quiz;
console.log(JSON.parse(yoss[0]).quiz)

console.log(radioquiz)
yoss.map((t,i)=>{console.log(JSON.parse(t));
	let a=JSON.parse(t);
	console.log(a)
	if(a.repcorrecte===radioquiz[i]){
		console.log(radioquiz[i]);
		console.log(t.repcorrecte);
		note =note+1;
	}
})
console.log("eeeeeeeeeeee");
note=(note*100)/yoss.length
console.log(note);
setNote(note);
let quizidd=JSON.parse(yoss[0]).quiz;
console.log(quizidd)
 axios.post('/marks/addMark',{mark:note,quizid:quizidd,type:"evaluation"})
 textQuery("quizzes")
return note;

}

        const keyPressHandler=(e)=>{
            if (e.key==="Enter")
            {
            e.preventDefault();
            textQuery(e.target.value)	
            e.target.value="";

            var chatlog = document.getElementById("chat-logs");
            chatlog.scrollTop = chatlog.scrollHeight;
            }
        }


        const renderOneMessageUser = (message,i) =>{
            console.log("message", message);

            if(message){
                return(

                    <div>

                            <div class="chat-msg self">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="mx-10">
                                        <a href="#" class="text-dark hover-primary font-weight-bold">You</a>
                                        <p class="text-muted font-size-12 mb-0">3 minutes</p>
                                    </div>
                            <span class="msg-avatar">
                                <img src="../images/avatar/3.jpg" class="avatar avatar-lg"/>
                            </span>
                                </div>
                        <div class="cm-msg-text"> <Message key={i} who={message.who} text={message.message} /> </div>        
                    </div>
                        
                    </div>

                );
            }
            

        }


        const renderOneMessageBot = (message, i) =>{
            console.log("message", message);

            if(message){
                console.log("rrrrrrrrrrr" + JSON.stringify(message.message));
                return(

                    <div>

                            <div class="chat-msg user">
                                <div class="d-flex align-items-center">
                                    <span class="msg-avatar">
                                        <img src="../images/avatar/2.jpg" class="avatar avatar-lg"/>
                                    </span>
                                    <div class="mx-10">
                                        <a href="#" class="text-dark hover-primary font-weight-bold">ODFbot</a>
                                    </div>
                                </div>
                                <div class="cm-msg-text"> <Message key={i} who={message.who} text={message.message[0]}  /> </div>
                                <div ref={el}/>
                                {message.message[1].map((v,i)=>{ 
					// console.log(message.message[1].length)
					 if (v.includes("adzuna")) {
						//console.log(message)
						return (
						  <>
							<ReactTinyLink
							  cardSize="small"
							  showGraphic={true}
							  maxLine={2}
							  minLine={1}
							  url={v}
							/>
						  </>
						);
					  }




					if ( v.includes("udemy") )
							{
								//console.log(message)
								return(<> 
							<a  class="one" target="_blank" href="default.asp" ><ReactTinyLink
							to={{ pathname: v }}
                          cardSize="small"
                          showGraphic={true}
						  autoPlay={true}
                          maxLine={2}
                          minLine={1}
                          url={v}
                        /></a><br></br>
								</>)
								
							}
					
							if ( v.includes("category","difficulty","correct_answer") )
							{ var z=JSON.parse(v)
								console.log(z);
								console.log("JSOOON")
							 	return(<>
								 
								
								
								
								  <div className="container-fluid shadow p-3 mb-5 bg-body rounded">
                <div className="modal-dialog ">
              <div className="modal-content">
              <div className="modal-header">
                <h3>Q{i+1}: {z.question}</h3>
              </div>
              <div className="modal-body">
                <div className="col-xs-3 5"> </div>
                <div className="quiz" id="quiz" data-toggle="buttons">
                  <label className="element-animation1 btn btn-lg btn-success btn-block"><span className="btn-label"><i className="glyphicon glyphicon-chevron-right" /></span> 
                  <input type="radio" name="q_answer" defaultValue={1} onClick={(e)=>{(radioquizP.splice(i,1,z.correct_answer));setradioquiz(radioquizP);}}/> {z.correct_answer}</label> <label   className="element-animation2 btn btn-lg btn-success btn-block"><span className="btn-label"><i className="glyphicon glyphicon-chevron-right" /></span> 
                  <input type="radio" name="q_answer" defaultValue={2} onClick={(e)=>{(radioquizP.splice(i,1,z.incorrect_answers[0]));setradioquiz(radioquizP);}} />{z.incorrect_answers[0]}</label> <label className="element-animation3 btn btn-lg btn-success btn-block"><span className="btn-label"><i className="glyphicon glyphicon-chevron-right" /></span> 
                  <input type="radio" name="q_answer" defaultValue={3} onClick={(e)=>{(radioquizP.splice(i,1,z.incorrect_answers[1]));setradioquiz(radioquizP);}}/>{z.incorrect_answers[1]}</label> <label className="element-animation4 btn btn-lg btn-success btn-block"><span className="btn-label"><i className="glyphicon glyphicon-chevron-right" /></span> 
                  <input type="radio" name="q_answer" defaultValue={4} onClick={(e)=>{(radioquizP.splice(i,1,z.incorrect_answers[2]));setradioquiz(radioquizP);console.log(radioquizP)}} /> {z.incorrect_answers[2]} </label> </div>
              </div>
           
            </div>
            </div>
            {i===19 && 
             
            <> <button class="btn btn-success shadow p-3 mb-5 bg-body rounded" onClick={()=>{calculernotequizP(message.message[1],radioquizP);setModalIsOpen(true)}}>Submit</button>
			
			 <button onClick={()=>{textQuery("quizzes")}} class="btn btn-dark shadow p-3 mb-5 bg-body rounded">Exit</button></> }

			
        
      
      </div>
								
								
								
								
								
								</>)
								
							}
							else if(v.includes("rep1","rep2","rep3"))
							{var yos=JSON.parse(v);
								
								radioquiz.push("0");





return(<> <div className="container-fluid shadow p-3 mb-5 bg-body rounded ">
								<div className="modal-dialog">
								<div className="modal-content">
								<div className="modal-header">
								  <h3>Q{i+1}: {yos.question}</h3>
								</div>
								<div className="modal-body">
								  <div className="col-xs-3 5"> </div>
								  <div className="quiz" id="quiz" data-toggle="buttons">
									<label className="element-animation1 btn btn-lg btn-success btn-block"><span className="btn-label"><i className="glyphicon glyphicon-chevron-right" /></span> 
									<input type="radio" checked={radioquiz[i]==="1"}  onClick={(e)=>{(radioquiz.splice(i,1,yos.rep1));setradioquiz(radioquiz);}} name="q_answer"  defaultValue={yos.rep1} /> {yos.rep1}</label> <label  className="element-animation2 btn btn-lg btn-success btn-block"><span className="btn-label"><i className="glyphicon glyphicon-chevron-right" /></span> 
									<input type="radio" checked={radioquiz[i]==="2"} onClick={(e)=>{(radioquiz.splice(i,1,yos.rep2));setradioquiz(radioquiz);}} name="q_answer" defaultValue={yos.rep2} />{yos.rep2}</label> <label className="element-animation3 btn btn-lg btn-success btn-block"><span className="btn-label"><i className="glyphicon glyphicon-chevron-right" /></span> 
									<input type="radio" checked={radioquiz[i]==="3"} onClick={(e)=>{(radioquiz.splice(i,1,yos.rep3));setradioquiz(radioquiz);console.log(radioquiz)}} name="q_answer" defaultValue={yos.rep3} />{yos.rep3}</label>  </div>
									
								</div>
						

							  </div>
							  </div>
							 
							  {i===message.message[1].length-1 && 
             
			 <>
             <button class="btn btn-success shadow p-3 mb-5 bg-body rounded" onClick={()=>calculernotequiz(message.message[1],radioquiz)} >Submit</button>  <button class="btn btn-dark shadow p-3 mb-5 bg-body rounded" onClick={()=>{textQuery("quizzes")}}>Exit</button>
             </>}
				
							  </div>

</>
)



							}

							else {console.log(v);return   <button  class="btn btn-light mx-2 my-1 shadow-lg p-3 mb-5 bg-body rounded" onClick={()=>{textQuery(v)}}>{v}</button>  }
						}
						
						)}
                                 
                            </div>

                    </div>

                );
            }
        }


        const renderMessage = (returnedMessages) => {
            console.log("MMMMMM" + JSON.stringify(returnedMessages));
            if (returnedMessages) {
              return returnedMessages.map((message, i) => {
                if (message.who === "user") 
                    return renderOneMessageUser(message, i);
                else if (message.who === "chatbot") 
                    return renderOneMessageBot(message, i);
              });
            } else {
              return null;
            }
          };

          const el = useRef(null);
          useEffect(() => {
            el.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
        });
        return (<>

        <div>
            
        <div id="chat-box-body" class="show">
		<div id="chat-circle" class="waves-effect waves-circle btn btn-circle btn-lg btn-warning l-h-70">
            <div id="chat-overlay"></div>
            <span class="font-size-24 ti-comments"></span>
		</div>

		<div class="chat-box">
            <div class="chat-box-header p-15 d-flex justify-content-between align-items-center">
                
                <div class="text-center flex-grow-1">
                    <div class="text-dark font-size-18">ODFBot</div>
                    <div>
                        <span class="badge badge-sm badge-dot badge-primary"></span>
                        <span class="text-muted font-size-12">Active</span>
                    </div>
                </div>
                <div class="chat-box-toggle">
                    <button id="chat-box-toggle" class="waves-effect waves-circle btn btn-circle btn-danger h-40 w-40 rounded-circle l-h-40" type="button">
                      <span class="font-size-18 mdi mdi-close"></span>
                    </button>                    
                </div>
            </div>
            <div class="chat-box-body">
                <div class="chat-box-overlay">   
                </div>
                <div class="chat-logs" id="chat-logs">
                    <div ref={el}/>
                    {renderMessage(messagesFromRedux)}
                </div>
            </div>
            <div class="chat-input">      
                <form>
                    <input type="text" id="chat-input" placeholder="Send a message..." onKeyPress={keyPressHandler}/>
                    <button type="submit" class="chat-submit" id="chat-submit">
                        <span class="font-size-22 mdi mdi-send"></span>
                    </button>
                </form>      
            </div>
		</div>
	</div>
    
    </div>

        </>)
}

    export default Chatbox; 