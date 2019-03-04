package DaoGenerico;

import java.util.List;

public interface Service<T> {

    T busacarObj(Object id);

    void crearObj(T object);

    T actualizarObj(T object);

    void eliminarObje(T object);

    List<T> buscarTodoObj();

    List<T> findByProperty(String prop, Object val);
}
