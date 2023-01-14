import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //проп тайпи для статичних пропсів
  };
  //   constructor() {
  //     super();

  //     this.state = {
  //       value: 0,
  //     };
  //     }// oldschool variant

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    //event доступний лише в
    //в сінхронном коді
    //--------------
    // const target = evt.target;
    // setTimeout(() => {
    //   console.log(target);
    // }, 1000);// асінхронний код доступний лише через
    //зберігання даних в локальній змінній, інакше
    //результат буде 'undefind'
    //---------------------
    //для перезапису стану використовується об'єктна
    // форма оновлення данних:
    //     this.setState({
    //       value: 10,
    //     });
    //   };
    //------------------------
    //для інтерактивного оновлення данних
    //використовується функціональна форма:

    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <Value counterValue={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
