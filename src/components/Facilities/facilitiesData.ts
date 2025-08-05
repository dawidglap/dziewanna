import {
    Home,
    Coffee,
    ParkingCircle,
    Wifi,
    PawPrint,
    Eye,
    Bath,
    CigaretteOff,
    Soup,
    Users,
    Sun,
    Utensils,
    Bike,
} from 'lucide-react';
import { TbGrill } from 'react-icons/tb';

export const FACILITIES = [
    { icon: Home, labelKey: 'facilities.apartments' },
    { icon: PawPrint, labelKey: 'facilities.petsAllowed' },
    { icon: ParkingCircle, labelKey: 'facilities.freeParking' },
    { icon: Wifi, labelKey: 'facilities.freeWifi' },
    { icon: Eye, labelKey: 'facilities.view' },
    { icon: Bath, labelKey: 'facilities.privateBathroom' },
    { icon: CigaretteOff, labelKey: 'facilities.nonSmoking' },
    { icon: Coffee, labelKey: 'facilities.breakfast' },
    { icon: TbGrill, labelKey: 'facilities.bbq' },
    { icon: Soup, labelKey: 'facilities.commonKitchenFireplace' },
    { icon: Users, labelKey: 'facilities.familyFriendly' },
    { icon: Sun, labelKey: 'facilities.terrace' },
    { icon: Utensils, labelKey: 'facilities.dedicatedKitchen' },
    { icon: Bike, labelKey: 'facilities.bikes' },
];
