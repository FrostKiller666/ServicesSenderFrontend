import React from "react";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

import styles from './MainSiteInformation.module.css'

const MainSiteInformation = () => {
    return (
        <>
            <Container fluid className={styles.container}>
                <h1 className={'fw-bold text-center pb-5 mb-4'}>CO POWINIENEŚ WIEDZIEĆ</h1>

                <Container className={styles.card}>
                <Row>
                    <Col>
                        <h3 className={'text-center fw-bold pb-4'}>Jak używać</h3>
                        <p className={'text-break fs-6'}>
                            asfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </p>
                    </Col>
                    <Col>
                        <Image src={'https://miro.medium.com/max/576/1*7FgTI6QxrfaZdA2DVg3w0g.png'}/>
                    </Col>
                </Row>
                </Container>

                <Container className={styles.cardOdd}>
                    <Row>
                        <Col>
                            <h3 className={'text-center fw-bold'}>Jak używać</h3>
                            <p className={'text-break fs-6'}>
                                asfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            </p>
                        </Col>
                        <Col>
                            <Image  src={'https://miro.medium.com/max/576/1*7FgTI6QxrfaZdA2DVg3w0g.png'}/>
                        </Col>
                    </Row>
                </Container>

                <Container className={styles.card}>
                    <Row>
                        <Col>
                            <h3 className={'text-center fw-bold'}>Jak używać</h3>
                            <p className={'text-break fs-6'}>
                                asfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            </p>
                        </Col>
                        <Col >
                            <Image src={'https://miro.medium.com/max/576/1*7FgTI6QxrfaZdA2DVg3w0g.png'}/>
                        </Col>
                    </Row>
                </Container>

            </Container>

        </>
    );
}

export {
    MainSiteInformation,
}
