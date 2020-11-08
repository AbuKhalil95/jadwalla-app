import React, { useEffect } from 'react';
import { wallStyle } from './styles/myWall.scss';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import postSetter from '../../hooks/wall/wallSetter';
const Content = props => {
    const { _handleSubmit, _handleChange, isSent } = postSetter(props.socket);
    useEffect(() => {
        props.socket.close();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Container >

                <Row className=" justify-content-md-center mb-5 text-light bg-dark h5" style={{ padding: '20px', height: '70px' }}>
                    <span>Write on your friend wall</span>
                </Row>
                <Row className=" justify-content-md-center " >
                    {
                        isSent ? <Alert variant="success">Your post have been successfully sent</Alert> :
                            <aside className={`note-wrap wall-note-wrap note-yellow`} >
                                <Form.Control placeholder="Type here..." as="textarea" rows={8} onChange={_handleChange} />
                                <Form style={wallStyle} onSubmit={_handleSubmit}  >
                                    <Button variant="primary" className="mt-3" type="submit" >Send</Button>
                                </Form>

                            </aside>
                    }
                </Row>
            </Container >

        </>
    )
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Content) 