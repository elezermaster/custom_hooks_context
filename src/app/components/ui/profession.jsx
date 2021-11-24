import React from 'react';

import {useProfessions} from '../../hooks/useProfessions'

const Profession = ({id}) => {
    const {isLoading,getProfession} = useProfessions()
    const profession = getProfession(id)
    if (!isLoading) {
        return (<p>{profession.name}</p>)
    } else {
        return "loading ..."
    }
}

export default Profession;
