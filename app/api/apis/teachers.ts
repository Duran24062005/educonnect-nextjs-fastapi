export const fetchTeachers = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/teachers/all');
    if (!response.ok) throw new Error('Error al obtener los datos');
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
;}