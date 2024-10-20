
import { Field, Form } from "react-final-form";
import { AuthRecover } from "../../../../../models/auth_recover";
import { useLoader, useValidation } from "@hooks/index";
import { useTranslation } from "react-i18next";
import { AppButton } from "bm-react-lib";

interface RecoverPasswordViewProps {
  name: string,
  data?: AuthRecover,
  handlerSave: (authUser: AuthRecover) => void
}

const RecoverPasswordView: React.FC<RecoverPasswordViewProps> = ({ data, handlerSave }) => {

  const loader = useLoader();

  const onSubmit = (authUser: AuthRecover) => {
    handlerSave(authUser);
  }

  const { t } = useTranslation();
  const { validate } = useValidation<AuthRecover>();
  const requiredFields: (keyof AuthRecover)[] = ['email'];

  return (
    <Form
      initialValues={data}
      onSubmit={onSubmit}
      validate={(values) => validate(values, requiredFields)}
    >
      {({ handleSubmit }) => (
        <form name="frmOffice" onSubmit={handleSubmit}>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              {/*<img
                alt="Your Company"
                src="https://www.electrohuila.com.co/wp-content/uploads/2024/07/cropped-logo-nuevo-eh.png.webp"
                className="mx-auto h-20 w-auto"
              />*/}
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {t("forgotPassword")}
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    {t("user")}
                  </label>
                  <div className="mt-2">
                    <Field name='email'>
                      {({ input, meta }) => (
                        <input
                          {...input}
                          id="email"
                          name="user"
                          type="email"
                          autoComplete="email"
                          className={meta.error && meta.touched ? "app-field-fail" : "app-field"}
                        />
                      )}
                    </Field>
                  </div>
                </div>
                <div>

                  <AppButton
                    context={loader}
                    text={t("send")}
                    className='flex w-full justify-center rounded-md app-bg-blue px-3 py-1.5  font-semibold leading-6 text-white shadow-sm hover:app-bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:app-bg-blue'
                    child={""}>
                  </AppButton>

                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Form>
  )
}


export default RecoverPasswordView;