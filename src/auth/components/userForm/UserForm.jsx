import React from 'react';

export const UserForm = (props) => {
    const { onInputChange, formState, onSubmit, errors } = props;
    return (
        <div className="">
            <form onSubmit={onSubmit}>
                <div>
                    <div className="form">
                        <div className="form-control">
                            <label htmlFor="">Nombre</label>
                            <input
                                type="text"
                                name="first_name"
                                value={formState.first_name}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Apellido</label>
                            <input
                                type="text"
                                name="last_name"
                                value={formState.last_name}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Telefono (sin 0 y 15)</label>
                            <input
                                type="text"
                                name="phone_number"
                                value={formState.phone_number}
                                onChange={onInputChange}
                            />
                            {errors?.phone_number && (
                                <span className="error">
                                    {errors.phone_number}
                                </span>
                            )}
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Direccion</label>
                            <input
                                type="text"
                                name="address"
                                value={formState.address}
                                onChange={onInputChange}
                            />
                        </div>
                        <button
                            className="button-primary"
                            type="submit">
                            Aplicar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
