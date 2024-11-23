import { Injectable } from "@angular/core";
import {Camera,CameraResultType,CameraSource} from '@capacitor/camera'
import {Geolocation} from '@capacitor/geolocation'
import { Platform } from '@ionic/angular'
import { TareasService } from '../services/tareas.service';


@Injectable({
    providedIn: 'root',
})
export class TakePhotoService {

photo:string|null = null;
location:{latitude:number, longitude:number}|null = null
address: string | null = null;

constructor(private platform: Platform) {}

async takePhoto(){
    try {
        const cameraSource = this.platform.is('android')?CameraSource.Photos : CameraSource.Camera;
        const image = await Camera.getPhoto({
        quality:90,
        resultType: CameraResultType.Uri, 
        source: cameraSource,
    });
    this.photo= image.webPath || null

    const coordinates = await Geolocation.getCurrentPosition()

    this.location= {
        latitude: coordinates.coords.latitude, 
        longitude: coordinates.coords.longitude, 
    }
    
    this.address = await this.getAddressFromCoordinates(
        this.location.latitude,
        this.location.longitude
    );
    return {
        photo: this.photo,
        location: this.location,
        address: this.address,
    };

    } catch (error) {
        console.error('Error al tomar foto o ubicacion',error);
        return null;
    }
    
}
async takeAddress(){
    try {
    const coordinates = await Geolocation.getCurrentPosition()

    this.location= {
        latitude: coordinates.coords.latitude, 
        longitude: coordinates.coords.longitude, 
    }
    
    this.address = await this.getAddressFromCoordinates(
        this.location.latitude,
        this.location.longitude
    );
    return {
        location: this.location,
        address: this.address,
    };

    } catch (error) {
        console.error('Error al obtener la ubicacion',error);
        return null;
    }
    
}

async getAddressFromCoordinates(latitude: number, longitude: number): Promise<string | null>{
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.display_name || 'Direccion no disponible';

    } catch (error) {
        console.log('Error al obtener la direccion', error)
        return null;
    }

}

}

