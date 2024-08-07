const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/plantList`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (plantId) => {
  try {
    const res = await fetch(`${BASE_URL}/${plantId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (plantFormData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deletePlant = async (plantId) => {
  try {
    const res = await fetch(`${BASE_URL}/${plantId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (plantId, plantFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${plantId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createWater = async (plantId, plantFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${plantId}/water`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantFormData),
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

const updateWater = async (plantId, whenToWaterId, plantFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${plantId}/water/${whenToWaterId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteWater = async (plantId, whenToWaterId) => {
  try {
    const res = await fetch(`${BASE_URL}/${plantId}/water/${whenToWaterId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createFertilizer = async (plantId, plantFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${plantId}/fertilize`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantFormData),
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

const updateFertilizer = async (plantId, whenToFertilizeId, plantFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${plantId}/fertilize/${whenToFertilizeId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteFertilizer = async (plantId, whenToFertilizeId) => {
  try {
    const res = await fetch(`${BASE_URL}/${plantId}/fertilize/${whenToFertilizeId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  index, 
  show, 
  create, 
  deletePlant, 
  update, 
  createWater, 
  updateWater, 
  deleteWater, 
  createFertilizer, 
  updateFertilizer, 
  deleteFertilizer
 }
