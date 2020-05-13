import {
  CREATE_MEMO,
  UPDATE_MEMO,
  DELETE_MEMO,
  LOADING_TRUE,
  LOADING_FALSE,
} from '../constants/MemoConstant';

export function LoadingTrue() {
  return {
    type: LOADING_TRUE,
  };
}

export function LoadingFalse() {
  return {
    type: LOADING_FALSE,
  };
}

export function CreateMemo(id, content) {
  let name = 'New Memo ' + parseInt(id + 1);
  let content2 = [];
  content.forEach(element => {
    let elementData = '';
    elementData = element.text.replace('\n', '[N]');
    content2.push(elementData);
  });
  let fixContent = content2.join('|');
  let lines = fixContent.split('|');
  let res = [];
  lines.forEach(line => {
    let lineData = null;
    lineData = line.replace(
      /NIK|NAMA|TEMPAT|TGL|LAHIR|JENIS|KELAMIN|GOL|DARAH|ALAMAT|RT|RW|KEL|DESA|KECAMATAN|AGAMA|STATUS|PERKAWINAN|PEKERJAAN|KEWARGANEGARAAN|BERLAKU|HINGGA/gi,
      '',
    );
    lineData = lineData.replace('\n', ' ');
    lineData = lineData.replace('[N]', ' ');
    lineData = lineData.replace('/', '');
    lineData = lineData.replace(':', '');
    lineData = lineData.trim();
    if (lineData !== '') {
      res.push(lineData);
    }
  });
  // console.log('res: ',res);
  let wilayah = res[0];
  let nik = res[1];
  let nama = res[2];
  let birthdate = res[3];
  let kelamin = res[4];
  // let golDarah = res[5];
  let alamat = res[5];

  // console.log('content mentah: ',content);
  // console.log('content olah: ',content2);
  // console.log('content fix: ',fixContent);
  // console.log('wilayah: ',wilayah);
  // console.log('NIK: ',nik);
  // console.log('Nama: ',nama);
  // console.log('TTL: ',birthdate);
  // console.log('Jenis Kelamin: ',kelamin);
  // console.log('Alamat: ',alamat);

  return {
    type: CREATE_MEMO,
    id: id,
    name: name,
    wilayah: wilayah,
    nik: nik,
    nama: nama,
    birthdate: birthdate,
    kelamin: kelamin,
    alamat: alamat,
  };
}

export function UpdateMemo(
  id,
  name,
  wilayah,
  nik,
  nama,
  birthdate,
  kelamin,
  alamat,
) {
  return {
    type: UPDATE_MEMO,
    id: id,
    name: name,
    wilayah: wilayah,
    nik: nik,
    nama: nama,
    birthdate: birthdate,
    kelamin: kelamin,
    alamat: alamat,
  };
}

export function DeleteMemo(id) {
  return {
    type: DELETE_MEMO,
    id: id,
  };
}
