import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {Drawer,Form,Input,Button} from 'antd'

const AddDrawer = ({show,handleOnClose,handleOnFinish,handleOnFinishFailed}) => {
    const intialValues={firstName:"",lastName:"",phoneNumber:null}

    
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

    return (
        <div>
            <Drawer width={412} title={'Add Contact'} visible={show} onClose={handleOnClose} maskClosable={false}>
         
            <Form
            form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={
          intialValues
      }
      onFinish={handleOnFinish}
      onFinishFailed={handleOnFinishFailed}
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your firstname!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item shouldUpdate
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        >
        {()=>(
             <Button 
        type="primary"
         htmlType="submit"
          disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
        >
          Submit
        </Button>
        )}
      </Form.Item>
    </Form>
    </Drawer>
        </div>
    )
}

Drawer.propTypes={
    show:PropTypes.bool.isRequired,
    handleOnClose:PropTypes.func.isRequired,
    handleOnFinish:PropTypes.func.isRequired,
    handleOnFinishFailed:PropTypes.func.isRequired
};

export default AddDrawer
