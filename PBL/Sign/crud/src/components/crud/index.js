import React, {Select} from 'react';
import StartFirebase from '../../components/firebaseConfig/index';
import {ref, set, get, update, remove, child, getDatabase} from "firebase/database";
import './main.css'

//import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';



export class Crud extends React.PureComponent {
    

    constructor(props) {
        super(props);
        this.state = {
            db: '',
            username:'',
            fullname: '',
            phonenumber: '',
            address:'',
            area:'', 
            materialtype: '',
            materialDes:''
        }
        this.interface= this.interface.bind(this)
    }

    componentDidMount() {
        this.setState({
           db : StartFirebase()
        })
    }

    render() {
        return (
            <>
                {/* <label>Enter Username</label>
                <input type="text" id="userbox" value={this.state.username} onChange={e => this.setState({ username: e.target.value})}/>
                <br /><br/>

                <label>Enter Full Name</label>
                <input type="text" id="namebox" value={this.state.fullname} onChange={e => this.setState({ fullname: e.target.value})}/>
                <br /><br/>

                <label>Enter Phonenumber</label>
                <input type="tel" id="phonebox" value={this.state.phonenumber} onChange={e => this.setState({ phonenumber: e.target.value})}/>
                <br /><br/>

                <label>Enter Address</label>
                <input type="text" id="addressbox" value={this.state.address} onChange={e => this.setState({ address: e.target.value})}/>
                <br /><br/>

                <label>Enter Area</label>
                <input list="area" id="areabox" value={this.state.area} onChange={e => this.setState({ area: e.target.value})}/>
                <br /><br/>

                <datalist id="area">
                    <option value="Wakad"/>
                    <option value="Akurdi"/>
                    <option value="Nigdi"/>
                    <option value="Chinchwad"/>
                </datalist>

                <label>Material To be Donated</label>
                {/* <input type="text" id="materialbox" value={this.state.materialtype} onChange={e => this.setState({ materialtype: e.target.value})}/> *}
                <input list="materialtype" id="materialbox" value={this.state.materialtype} onChange={e => this.setState({ materialtype: e.target.value})} />
                <datalist id="materialtype">
                    <option value="Clothes"/>
                    <option value="Books"/>
                    <option value="Food"/>
                    <option value="Study Material"/>
                </datalist>
                
                <br /><br/>

                <label>Material Description</label>
                <input type="text" id="matdesbox" value={this.state.materialDes} onChange={e => this.setState({ materialDes: e.target.value})}/>
                <br /><br/>
                
                


                <button id="addBtn" onClick={this.interface}>Add data</button>
                <button id="updateBtn" onClick={this.interface}>Update data</button>
                <button id="deleteBtn" onClick={this.interface}>Delete data</button>
                <button id="selectBtn" onClick={this.interface}>Get Data from DB</button> */}
                <section id="contact" className="contact mt-5">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Donation</h2>
                <h3 className="section-subheading text-muted">Give Details</h3>
            </div>

            <div className="row">

                {/* <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6 info">
                            <i className="fas fa-map"></i>
                            <h4>Donate Food</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eaque molestiae neque ut facilis! Corrupti, praesentium.</p>
                        </div>
                        <div className="col-lg-6 info">
                            <i className="fas fa-phone"></i>
                            <h4>Donate Cloths</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime inventore laudantium in blanditiis labore repellendus?</p>
                        </div>
                        <div className="col-lg-6 info">
                            <i className="fas fa-envelope"></i>
                            <h4></h4>
                            <p>contact@test.com<br/>test@example.com</p>
                        </div>
                        <div className="col-lg-6 info">
                            <i className="fas fa-clock"></i>
                            <h4>Working Hours</h4>
                            <p>Mon - Fri: 9AM to 5PM<br/>Sunday: 9AM to 1PM</p>
                        </div>
                    </div>
                </div> */}
                <div className="col-lg-6 align-center">
                    <form>
                        <div className="form-group">
                            <input className="form-control" placeholder="User Name" type="text" id="userbox" value={this.state.username} onChange={e => this.setState({...this.state, username: e.target.value})}/>
                            <br/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Full Name" type="text" id="namebox" value={this.state.fullname} onChange={e => this.setState({...this.state, fullname: e.target.value})}/>
                            <br/>
                        </div>

                        <div className="form-group">
                            <input className="form-control" placeholder="Phone number" type="tel" id="phonebox" value={this.state.phonenumber} onChange={e => this.setState({...this.state, phonenumber: e.target.value})}/>
                            <br/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Address" type="text" id="addressbox" value={this.state.address} onChange={e => this.setState({...this.state, address: e.target.value})}/>
                            <br/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Area" list="area" id="areabox" value={this.state.area} onChange={e => this.setState({...this.state, area: e.target.value})}/>
                            <br/>
                            <datalist id="area">
                                <option value="Wakad"/>
                                <option value="Akurdi"/>
                                <option value="Nigdi"/>
                                <option value="Chinchwad"/>
                            </datalist>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Material Type" list="materialtype" id="materialbox" value={this.state.materialtype} onChange={e => this.setState({...this.state, materialtype: e.target.value})} />
                            <br/>
                            <datalist id="materialtype">
                                <option value="Clothes"/>
                                <option value="Books"/>
                                <option value="Food"/>
                                <option value="Study Material"/>
                            </datalist>
                        </div>    
                        <div className="form-group">
                            <input className="form-control" placeholder="Material Description" type="text" id="matdesbox" value={this.state.materialDes} onChange={e => this.setState({...this.state, materialDes: e.target.value})}/>
                            <br/>
                        </div>
                        
                        <div className="text-center">
                            <button id="addBtn" onClick={this.interface} className="btn btn-danger rounded-cor">Add data</button>
                            <button id="updateBtn" onClick={this.interface} className="btn btn-danger rounded-cor">Update data</button>
                            <button id="deleteBtn" onClick={this.interface} className="btn btn-danger rounded-cor">Delete data</button>
                            <button id="selectBtn" onClick={this.interface} className="btn btn-danger rounded-cor">Get Data from DB</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
                
            </>
        )
    }

    interface(event) {
        event.preventDefault();
        const id = event.target.id
        if(id=='addBtn'){
            this.insertData()
        }

        else if(id=='updateBtn'){
            this.updateData()
        }
        else if(id=='deleteBtn'){
            this.deleteData()
        }
        else if(id=='selectBtn'){
            this.selectData()
        }
    }

    getAllInputs() {
        return{
            username:this.state.username,
            name:this.state.fullname,
            phone: Number(this.state.phonenumber),
            address:this.state.address,
            area:this.state.area,
            materialtype:this.state.materialtype,
            materialDes:this.state.materialDes
        }
    }

    insertData() {
        const db = this.state.db
        const data = this.getAllInputs()
console.log(data);
        set(ref(db, 'Customer/'+data.username),
        {
            Fullname: data.name,
            Phonenumber: data.phone,
            Address: data.address,
            Area: data.area,
            Materialtype: data.materialtype,
            MaterialDes: data.materialDes
        })
        .then((data) => {
        console.log(data);

            alert('Data inserted successfully')})
        .catch((error) => {alert("Error: "+error)})
    }

    updateData() {
        const db = this.state.db
        const data = this.getAllInputs()

        update(ref(db, 'Customer/'+data.username),
        {
            Fullname: data.name,
            Phonenumber: data.phone,
            Address: data.address,
            Area: data.area,
            Materialtype: data.materialtype,
            MaterialDes: data.materialDes
        })
        .then(() => {alert('Data updated successfully')})
        .catch((error) => {alert("Error: "+error)})
    }

    deleteData() {
        const db = this.state.db;
        const username = this.getAllInputs().username;

        remove(ref(db, 'Customer/'+username))
        
        .then(() => {alert('Data inserted successfully')})
        .catch((error) => {alert("Error: "+error)})
    }

    selectData() {
        const dbref = ref(this.state.db)
        const username = this.getAllInputs().username;

        get(child(dbref, 'Customer/'+ username)).then((snapshot) => {
            if(snapshot.exists()) {
                this.setState({
                    fullname: snapshot.val().Fullname,
                    phonenumber: snapshot.val().Phonenumber,
                    address: snapshot.val().Address,
                    area: snapshot.val().Area,
                    materialtype: snapshot.val().Materialtype,
                    materialDes: snapshot.val().MaterialDes
                })
            }

            else{
                alert("No data Found")
            }
        })
        .catch((error)=>{alert("Error: "+error)})
    }
}