import { create } from 'zustand'

interface UserName {
  name: string
  setName: (userName: string) => void
}

const useUserNameStore = create<UserName>()((set) => ({
  name: '',
  setName: (userName) => set(() => ({ name: userName })),
}))

export default useUserNameStore;