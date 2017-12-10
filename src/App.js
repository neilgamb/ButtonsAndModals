import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import UserSelect from './UserSelect';
import './App.css';

class App extends Component {
  handleEditClick(){
    let check = document.querySelector('.button-check');
    let times = document.querySelector('.button-times');
    let refresh = document.querySelector('.button-refresh');
    let edit = document.querySelector('.button-edit');
    let users = document.querySelector('.button-users');
    let add = document.querySelector('.button-add');
    let options = document.querySelector('.button-options');
    check.classList.remove('hide');
    times.classList.remove('hide');
    refresh.classList.add('hide');
    edit.classList.add('hide');
    users.classList.add('reveal-animate-users');
    add.classList.add('reveal-animate-add');
    options.classList.add('reveal-animate-options');
    users.classList.remove('hide-animate-users');
    add.classList.remove('hide-animate-add');
    options.classList.remove('hide-animate-options');
    times.classList.add('animate-times');
  }
  handleCheckClick(){
    let check = document.querySelector('.button-check');
    let times = document.querySelector('.button-times');
    let refresh = document.querySelector('.button-refresh');
    let edit = document.querySelector('.button-edit');
    let users = document.querySelector('.button-users');
    let add = document.querySelector('.button-add');
    let options = document.querySelector('.button-options');
    check.classList.add('hide');
    times.classList.add('hide');
    refresh.classList.remove('hide');
    edit.classList.remove('hide');
    users.classList.remove('reveal-animate-users');
    add.classList.remove('reveal-animate-add');
    options.classList.remove('reveal-animate-options');
    users.classList.add('hide-animate-users');
    add.classList.add('hide-animate-add');
    options.classList.add('hide-animate-options');
    times.classList.remove('.animate-times');
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleEditClick} class="button button-edit">
            <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <button 
          onClick={this.handleCheckClick} 
          class="button button-check hide">
            <i class="fa fa-check" aria-hidden="true"></i>
        </button>
        <button class="button button-refresh">
            <i class="fa fa-refresh" aria-hidden="true"></i>
        </button>
        <button 
          class="button button-times hide"
          onClick={this.handleCheckClick}>
            <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <button 
          class="button button-users"
          onClick={() => this.selectUsers.show()}>
            <i class="fa fa-users" aria-hidden="true"></i>
        </button>
        <button 
          class="button button-add"
          onClick={() => this.addComponent.show()}>
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
        <button 
          class="button button-options"
          onClick={() => this.selectOptions.show()}>
            <i class="fa fa-cog" aria-hidden="true"></i>
        </button>
        <SkyLight hideOnOverlayClicked ref={ref => this.selectUsers = ref}>
          <UserSelect />
        </SkyLight>
        <SkyLight hideOnOverlayClicked ref={ref => this.selectOptions = ref}>
          Select Options
        </SkyLight>
        <SkyLight hideOnOverlayClicked ref={ref => this.addComponent = ref}>
          Select New Component
        </SkyLight>
      </div>
    );
  }
}

export default App;
