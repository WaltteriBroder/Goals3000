package fi.goals.config;

import fi.goals.model.User;
import fi.goals.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class UserPrincipalDetailsService implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public UserPrincipalDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserPrincipalDetailsService() {
    }


    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        System.out.println("loadByUserName: " + name);
        User user = this.userRepository.findByUsername(name);
        System.out.println("User: " + user);
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());
        UserPrincipal userPrincipal = new UserPrincipal(user);

        System.out.println("userPrincipal: " + userPrincipal);
        return userPrincipal;
    }
}