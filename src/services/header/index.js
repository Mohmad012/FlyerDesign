import axios from 'axios'

export const handleRegister = async params => {
  const {
    email,
    firstName,
    lastName,
    password,
    phone_number,
    profile_picture,
    username,
    dateOfBirth,
    gender,
    token,
  } = params
  try {
    const res = await axios.post(
      `${process.env.api_baseurl}/customer/register`,
      {
        email,
        firstName,
        lastName,
        password,
        phone_number,
        profile_picture,
        username,
        dateOfBirth,
        gender,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return res
  } catch (error) {
    return error
  }
}

export const handleRegisterApiRoute = async params => {
  const {email, firstName, lastName, password, phone_number, locale} = params
  try {
    const res = await axios.post(
      `/api/register`,
      {
        email,
        firstName,
        lastName,
        password,
        phone_number,
        locale,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    return res.data
  } catch (error) {
    return error
  }
}

export const handleLogin = async params => {
  const {password, username, token} = params
  try {
    const res = await axios.post(
      `${process.env.api_baseurl}/customer/login`,
      {
        password,
        username,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return res
  } catch (error) {
    return error
  }
}

export const handleLoginApiRoute = async params => {
  const {email, password, locale} = params
  try {
    const res = await axios.post(
      `/api/login`,
      {
        username: email,
        password,
        locale,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    return res?.data
  } catch (error) {
    return error
  }
}

export const handleSearchApiRoute = async params => {
  const {word, locale} = params
  try {
    const res = await axios.post(`/api/search`, {
      word,
      locale,
    })

    return res?.data
  } catch (error) {
    console.log('Error', error)
  }
}

export const handleSearch = async params => {
  const {word, token} = params
  try {
    const res = await axios.get(
      `${process.env.api_baseurl}/facets/search/${word}?pageSize=20&sortBy=position&sortDir=DESC`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return res?.data
  } catch (error) {
    console.log('Error', error)
  }
}
