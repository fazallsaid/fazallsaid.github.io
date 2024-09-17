import os

def buat_folder(daftar_nama):
  """Membuat folder berdasarkan daftar nama.

  Args:
    daftar_nama: Nama file teks yang berisi daftar nama.
  """

  with open(daftar_nama, 'r') as file:
    for nama in file:
      nama = nama.strip()  # Hapus spasi di awal dan akhir
      try:
        os.mkdir(nama)
        print(f"Folder '{nama}' berhasil dibuat.")
      except FileExistsError:
        print(f"Folder '{nama}' sudah ada, dilewati.")

            # Menambahkan pembuatan folder pertemuan di dalam folder nama
      for i in range(1, 16):
        folder_pertemuan = os.path.join(nama, f"pertemuan-{i}")
        try:
          os.mkdir(folder_pertemuan)
          print(f"Folder '{folder_pertemuan}' berhasil dibuat.")
        except FileExistsError:
          print(f"Folder '{folder_pertemuan}' sudah ada, dilewati.")

      # Membuat folder goal hanya setelah pertemuan-15
      if i == 15:
        for a in range(1, 3):
          folder_goal = os.path.join(nama, f"goal-{a}")
          try:
            os.mkdir(folder_goal)
            print(f"Folder '{folder_goal}' berhasil dibuat.")
          except FileExistsError:
            print(f"Folder '{folder_goal}' sudah ada, dilewati.")

if __name__ == "__main__":
  daftar_nama = "daftar_nama.txt"
  buat_folder(daftar_nama)