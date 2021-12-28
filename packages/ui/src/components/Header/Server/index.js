import React from 'react';
import PropTypes from 'prop-types';
import { Message, Popup, Grid, Label, Button, Form, Modal, Icon, Menu } from 'semantic-ui-react';

class Server extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      host: this.props.host,
    };
  }

  /** Update state host whenever the main one connects */
  static getDerivedStateFromProps(props, state) {
    if (props.status === 'connected') {
      return{
        host: props.host,
      };
    }
    return null;
  }

  handleHostChange = (newHost) => {
    this.setState({
      host: newHost,
    });
  };

  saveChanges = (e) => {
    e.preventDefault();
    this.props.actions.connect(this.state.host);
  };

  render() {
    let status, modalContent;

    if (this.props.status === 'disconnected' || this.props.status === 'connecting') {
      status = (
        <Popup
          content='Click to connect to a server'
          trigger={
            <div>
              <Icon name='plug' color='red'/>
              { this.props.content || 'Disconnected' }
            </div>
          }
        />
      );
      const errorMessage = (this.props.error) ? (
        <div>
          <p>Please make sure that you have typed the right host:port, and that the server is running.</p>
          <p><code>{ this.props.error.type }: { this.props.error.message }</code></p>
        </div>
        ) : null;
      modalContent = (
        <Form onSubmit={ this.saveChanges } error={ !!errorMessage } loading={ this.props.status === 'connecting' }>
          <Form.Input
            label="Server"
            fluid
            action={{ primary: true, icon: 'plug', content: 'Connect' }}
            value={ this.state.host }
            onChange={ (e, input) => { this.handleHostChange(input.value);  } }
          />
          <Message
            error
            icon='warning sign'
            header='Unable to connect'
            content={ errorMessage }
          />
        </Form>
      );
    } else {
      status = (
        <Popup
          trigger={
            <p>
              <Icon name='plug' color='green'/>
              Connected
            </p>
          }
        >
          <Popup.Content>
            <Label color='green'>
              Server
              <Label.Detail>
                { this.props.host }
              </Label.Detail>
            </Label>
          </Popup.Content>
        </Popup>
      );
      modalContent = (
        <Grid columns={ 2 }>
          <Grid.Column>
            <Label circular color='green' empty style={ {marginRight: '1em'} }/>
            Connected to { this.props.host }
          </Grid.Column>
          <Grid.Column>
            <Button negative onClick={ this.props.actions.disconnect }>Disconnect</Button>
          </Grid.Column>
        </Grid>
      );
    }

    const button = (
      <a href>{ status }</a>
    );

    return (
      <Modal trigger={ button }>
        <Modal.Header>
          <Icon name='lightning' />
          Server connection
        </Modal.Header>
        <Modal.Content>
          { modalContent }
        </Modal.Content>
      </Modal>
    );
  }
}

Server.propTypes = {
  host: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
  }),
  actions: PropTypes.shape({
    connect: PropTypes.func.isRequired,
    disconnect: PropTypes.func.isRequired,
  }).isRequired
};

export default Server;
