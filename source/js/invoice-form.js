const $form = $('#payment-form')
const $name = $form.find('input[name="fio"]')
const $phone = $form.find('input[name="phone"]')
// const $surname = $form.find('input[name="surname"]')
// const $region = $form.find('select[name="region"]')
const $email = $form.find('input[name="email"]')
// const $phone = $form.find('input[name="phone"]')
// const $fax = $form.find('input[name="fax"]')
const $submit = $form.find('.invoice-cart__send')

// let isRegionSelected = false
// let isCountrySelected = false
let isNameValid = false
// let isCompanyValid = false
// let isSurnameValid = false
let isEmailValid = false
let isPhoneValid = false
// let isFaxValid = false

// let hasRegionError = false
// let hasCountryError = false
let hasNameError = false
// let hasCompanyError = false
// let hasSurnameError = false
let hasEmailError = false
let hasPhoneError = false
// let hasFaxError = false
// let hasMessageError = false
// let hasCheckboxError = false

const emailRegExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/

const setError = $item => {
  $item.parent().addClass('invalid')
  $item.parent().addClass('invalid')
}

const removeError = $item => {
  $item.parent().removeClass('invalid')
  $item.parent().removeClass('invalid')
}

const checkErrors = () => {
  console.log('errors')
  if (
    // hasRegionError ||
    // hasCountryError ||
    hasNameError ||
    // hasCompanyError ||
    // hasSurnameError ||
    hasEmailError ||
    hasPhoneError
    // hasFaxError ||
    // hasMessageError ||
    // hasCheckboxError
  ) {
    $submit.attr('disabled', true)
  } else {
    $submit.removeAttr('disabled')
  }
}

const setErrors = () => {
  // if (!isRegionSelected) {
  //   setError($region)
  //   hasRegionError = true
  // }
  // if (!isCountrySelected) {
  //   setError($country)
  //   hasCountryError = true
  // }
  if (!isNameValid) {
    setError($name)
    hasNameError = true
  }
  // if (!isCompanyValid) {
  //   setError($company)
  //   hasCompanyError = true
  // }
  // if (!isSurnameValid) {
  //   setError($surname)
  //   hasSurnameError = true
  // }
  if (!isEmailValid) {
    setError($email)
    hasEmailError = true
  }
  if (!isPhoneValid) {
    setError($phone)
    hasPhoneError = true
  }
  // if (!isFaxValid) {
  //   setError($fax)
  //   hasFaxError = true
  // }
  // if (!isMessageValid) {
  //   setError($message)
  //   hasMessageError = true
  // }
  // if (!isChecked) {
  //   setError($checkbox)
  //   hasCheckboxError = true
  // }
}

const checkName = () => {
  if (isNameValid) {
    removeError($name)
  } else {
    setError($name)
  }
}

const onNameInput = () => {
  removeError($name)
  hasNameError = false
  checkErrors()

  if (($name.val().trim().length = 0)) {
    isNameValid = false
  } else {
    isNameValid = true
  }
}

// const onCompanyInput = () => {
//   removeError($company)
//   hasCompanyError = false
//   checkErrors()

//   if (($company.val().trim().length = 0)) {
//     isCompanyValid = false
//   } else {
//     isCompanyValid = true
//   }
// }

// const checkSurname = () => {
//   if ($surname.val().trim().length = 0) {
//     setError($surname)
//     isSurnameValid = false
//   } else {
//     removeError($surname)
//     isSurnameValid = true
//   }
// }

// const onSurnameInput = () => {
//   removeError($surname)
//   hasSurnameError = false
//   checkErrors()

//   if (($surname.val().trim().length = 0)) {
//     isSurnameValid = false
//   } else {
//     isSurnameValid = true
//   }
// }

// const checkRegion = () => {
//   if (isRegionSelected) {
//     removeError($region)
//   } else {
//     setError($region)
//   }
// }

// const onRegionSelect = () => {
//   if (!isRegionSelected) {
//     removeError($region)
//     hasRegionError = false
//     checkErrors()

//     isRegionSelected = true
//   }
// }

// const checkCountry = () => {
//   if (isCountrySelected) {
//     removeError($country)
//   } else {
//     setError($country)
//   }
// }

// const onCountrySelect = () => {
//   if (!isCountrySelected) {
//     removeError($country)
//     hasCountryError = false
//     checkErrors()

//     isCountrySelected = true
//   }
// }

const checkEmail = () => {
  if ($email.val().trim().match(emailRegExp)) {
    removeError($email)
    isEmailValid = true
  } else {
    setError($email)
    isEmailValid = false
  }
}

const onEmailInput = () => {
  removeError($email)
  hasEmailError = false
  checkErrors()

  if ($email.val().trim() !== '' && $email.val().trim().match(emailRegExp)) {
    isEmailValid = true
  } else {
    isEmailValid = false
  }
}

const onPhoneInput = () => {
  removeError($phone)
  hasPhoneError = false
  checkErrors()

  if ($phone.val().includes('_')) {
    isPhoneValid = false
  } else {
    isPhoneValid = true
  }
}

// const onFaxInput = () => {
//   removeError($fax)
//   hasFaxError = false
//   checkErrors()

//   if ($fax.val().includes('_')) {
//     isFaxValid = false
//   } else {
//     isFaxValid = true
//   }
// }

// const onMessageInput = () => {
//   removeError($message)
//   hasMessageError = false
//   checkErrors()

//   if (($message.val().trim().length = 0)) {
//     isMessageValid = false
//   } else {
//     isMessageValid = true
//   }
// }

const onSubmit = e => {
  e.preventDefault()

  setErrors()

  if (
    // isRegionSelected &&
    // isCountrySelected &&
    isNameValid &&
    // isCompanyValid &&
    // isSurnameValid &&
    isEmailValid &&
    isPhoneValid
    // isFaxValid &&
    // isMessageValid &&
    // isChecked
  ) {
    $form.trigger('submit')
  } else {
    $submit.attr('disabled', true)
  }
}

// const onCheckboxChange = () => {
//   removeError($checkbox)
//   hasCheckboxError = false
//   checkErrors()

//   if ($checkbox.is(':checked')) {
//     isChecked = true
//   } else {
//     isChecked = false
//   }
// }

$name.on('input', onNameInput)
// $company.on('input', onCompanyInput)
// $surname.on('input', onSurnameInput)

// $region.on('select2:select', onRegionSelect)
// $country.on('select2:select', onCountrySelect)

$email.on('input', onEmailInput)
$phone.on('input', onPhoneInput)
// $fax.on('input', onFaxInput)
// $message.on('input', onMessageInput)
// $checkbox.on('change', onCheckboxChange)
$submit.on('click', onSubmit)

$form.on('submit', function (e) {
  $submit.attr('disabled', true)

  // const $type = $form.find(
  //   '.daichi-payment__invoice-payment-type input:checked'
  // )

  // const formData = {
  //   [$name.attr('name')]: $name.val(),
  //   [$phone.attr('name')]: $phone.val(),
  //   [$email.attr('name')]: $email.val(),
  //   [$type.attr('name')]: $type.val(),
  // }

  // $.ajax({
  //   url: this.action,
  //   method: this.method,
  //   data: formData,
  // })
  //   .done(function () {
  //     console.log('###done')
  //     $submit.removeAttr('disabled')
  //   })
  //   .fail(function () {
  //     console.log('###fail')
  //     $submit.removeAttr('disabled')
  //   })
})
