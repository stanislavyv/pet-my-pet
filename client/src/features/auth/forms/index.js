import Button from '../../../components/shared/button';
import Fieldset from '../../../components/shared/form/fieldset';
import Form from '../../../components/shared/form';
import FormLegend from '../../../components/shared/form/form-legend';
import Field from '../../../components/shared/form/field';
import InputError from '../../../components/shared/form/input-error';
import FormWrapper from '../../../components/shared/form/form-wrapper';

const AuthForm = ({ type, onSubmitHandler, errors, onBlurHandlers }) => {
    return (
        <FormWrapper>
            <Form onSubmitHandler={onSubmitHandler}>
                <Fieldset>
                    <FormLegend>{type}</FormLegend>
                    {type === 'Register' && (
                        <>
                            <Field type="username" auth>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    onBlur={
                                        onBlurHandlers?.onUsernameBlurHandler
                                    }
                                />
                            </Field>
                            <InputError message={errors?.username} />
                        </>
                    )}
                    <Field type="email" auth>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onBlur={onBlurHandlers?.onEmailBlurHandler}
                        />
                        <i className="fas fa-user"></i>
                    </Field>
                    <InputError message={errors?.email} />

                    <Field type="password" auth>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onBlur={onBlurHandlers?.onPasswordBlurHandler}
                        />
                        <i className="fas fa-key"></i>
                    </Field>
                    <InputError message={errors?.password} />

                    <Button type="submit">{type}</Button>
                </Fieldset>
            </Form>
        </FormWrapper>
    );
};

export default AuthForm;
