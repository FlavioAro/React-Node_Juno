import React from 'react'
import { MdAspectRatio, MdCreditCard, MdViewWeek } from 'react-icons/md'

export default function Checkout() {

    return (
        <div className="container mt-4 pt-3">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h3 className="font-weight-normal mb-4">Pagamento</h3>

                    <div className="card card-body">
                        <div className="mb-3">
                            <label className="label-custom">Como você prefere pagar?</label>
                        </div>

                        <a href="/card">
                            <div className="d-flex pointer">
                                <MdCreditCard className="display-4" />
                                <div className="ms-4 d-flex flex-column align-items-center">
                                    <label className="h5 mb-1 me-auto">Cartão</label>
                                    <label className="text-muted me-auto">Crédito</label>
                                </div>
                            </div>
                        </a>

                        <hr />

                        <a href="/boleto">
                            <div className="d-flex pointer">
                                <MdViewWeek className="display-4" />
                                <div className="ms-4 d-flex flex-column align-items-center">
                                    <label className="h5 mb-1 me-auto">Boleto bancário</label>
                                    <label className="text-muted me-auto">O pagamento será aprovado em 1 ou 3 dias uteis</label>
                                </div>
                            </div>
                        </a>

                        <hr />

                        <a href="/picpay">
                            <div className="d-flex pointer">
                                <MdAspectRatio className="display-4" />
                                <div className="ms-4 d-flex flex-column align-items-center">
                                    <label className="h5 mb-1 me-auto">PIC PAY</label>
                                    <label className="text-muted me-auto">Pague via QR Code com Pic pay</label>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}